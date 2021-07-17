import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  isdisplay=true;
  showform(){
    this.isdisplay=!this.isdisplay
  }

  constructor() { }

  ngOnInit(): void {
  }

}
