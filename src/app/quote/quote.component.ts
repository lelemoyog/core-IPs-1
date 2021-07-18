import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1,'issa saitemu','"Be patient over what be falls you"','issah',new Date(2012,4,5)),
    new Quote(2,'issah saitemuz',' “The Best Way To Get Started Is To Quit Talking And Begin Doing.”','Walt Disney',new Date(2020,11,18)),
    new Quote(3,'issah saitemuz','“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”','Winston Churchill',new Date(2019,12,12)),
    new Quote(4,'issah saitemuz','“Don’t Let Yesterday Take Up Too Much Of Today.”','Will Rogers',new Date(2020,12,18))
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.posteddate = new Date(quote.posteddate)
    this.quotes.push(quote)
  }

  deleteoneproject(noti:boolean,index:number){
      if(noti){
        this.quotes.splice(index,1)
      }
  }
  
  showform(index:number){
    this.quotes[index].showdetails=!this.quotes[index].showdetails
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
