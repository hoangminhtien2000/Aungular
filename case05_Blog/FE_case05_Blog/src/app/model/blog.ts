export class Blog{
  id_blog!: number;
  name_blog!: string;
  content!:  string;
  content_full!:  string;
  img_blog!:string;
  like1!:number;
  category!:any;
  comments!:any;

  constructor(id_blog: number, name_blog: string, content: string, content_full: string, img_blog: string, like1: number, category: any, comments: any) {
    this.id_blog = id_blog;
    this.name_blog = name_blog;
    this.content = content;
    this.content_full = content_full;
    this.img_blog = img_blog;
    this.like1 = like1;
    this.category = category;
    this.comments = comments;
  }
}






