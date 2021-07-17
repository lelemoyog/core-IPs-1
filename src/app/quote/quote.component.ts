import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'issa saitemu','Be patient over what be falls you','3/5/2021'),
    new Quote(2,'issah saitemuz','Be patient over what be falls you','1/5/2020')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
