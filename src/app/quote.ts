export class Quote {
    showdetails:boolean;
       constructor(public id:number,public name:string,public postedquote:string,public author:string ,public posteddate:Date,public likes:number){
           this.showdetails=false
    }
}
