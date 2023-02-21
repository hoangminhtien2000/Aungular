import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typescript';
  size1: number = 10;
  color1: string = 'red';

  changeSize(size1: string): void {
    this.size1 = +size1;
  }

  changeColor(color1: string): void {
    this.color1 = color1;
  }

}
