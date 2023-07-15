import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  funcT: any = 'noFunction';
  calValue: number = 0;
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickVal(val: string, type: any) {
    console.log(val, type);
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }

  }

  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT !== 'noFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }

  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalValue(total, val);
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalValue(total, val);
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalValue(total, val);
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalValue(total, val);
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalValue(total, val);
    }
  }

  totalValue(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (this.funcT == '=') {
      this.onEqual();
    }
  }

  onEqual() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';
  }

}
