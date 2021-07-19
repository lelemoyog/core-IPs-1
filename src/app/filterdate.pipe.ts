import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdate'
})
export class FilterdatePipe implements PipeTransform {

 transform(value: any): any {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    var calc = "days"
    var calc2 =" years"
    var calc3 =" hours"
    var calc4 = "months"

    if (dateCounter >= 365 ){
      return Math.round(dateCounter/365) + calc2;
    }else if( dateCounter >= 30){
      return Math.round(dateCounter/30) + calc4;
    }else if(dateCounter < 1){
        return Math.round(dateCounter*(24/86400)) + calc3;
    } else{
      return (dateCounter + calc);
    }
  }

}
