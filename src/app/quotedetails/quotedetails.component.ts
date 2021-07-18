import { Component, OnInit ,Input} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote;Quote
  constructor() { }

  ngOnInit(): void {
  }

}
