import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote;Quote;
  @Output() todeletequote = new EventEmitter<boolean>()

  deletequote(todelete:boolean){
    this.todeletequote.emit(todelete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
