export class Product{
  id!: number;
  name!: string;
  status!: boolean;
  img!:string;
  price!:number;


  constructor(id: number, name: string, status: boolean, img: string, price: number) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.img = img;
    this.price = price;
  }
}
