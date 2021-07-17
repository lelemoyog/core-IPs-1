import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
 add= function(counter){ 
   counter = 0;
   return function( counter){
     counter +=1;
      return counter
   }();
}
counnt =this

  constructor() { }

  ngOnInit(): void {
  }

}
