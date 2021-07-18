export class Quote {
    [x: string]: any;
    constructor(public id:number,public name:string,public postedquote:string,public author:string ,public posteddate:Date){
    }
}
