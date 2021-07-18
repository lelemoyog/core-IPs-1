import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

count=0;
countdownvote=0

counter(){
this.count++

}
counter2(){
this.countdownvote++
}

  constructor() { }

  ngOnInit(): void {
  }

}
