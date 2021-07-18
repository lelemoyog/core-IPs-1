import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  [x: string]: any;
  id:number;
  postedquote:string;
  author:string;
  name:string;
  newQuote = new Quote(0,"","","",new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  collectinfo(){
   this.addQuote.emit(this.newQuote);
  }
  isdisplay=true;
  showform(){
    this.isdisplay=!this.isdisplay
  }

  constructor() { }

  ngOnInit(): void {
  }

}
