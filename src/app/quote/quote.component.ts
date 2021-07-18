import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'issa saitemu','Be patient over what be falls you','issah',new Date(2012,4,5)),
    new Quote(2,'issah saitemuz','Be patient over what be falls you','issah',new Date(2020,12,18))
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.posteddate = new Date(quote.posteddate)
    this.quotes.push(quote)
  }

  deletequote(index:number){
    this.quotes.splice(index,1)
  }
  isdisplay=true;
  showform(index:number){
    this.isdisplay=!this.isdisplay
  }
  constructor() { }

  ngOnInit(): void {
  }

}
