import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestvotes]'
})
export class HighestvotesDirective  {

  constructor(private elem:ElementRef) {
      if(elem.nativeElement.quotes.length > 2) {
        elem.nativeElement.style.backgroundColor = "#D4E6F1";
      }
    
   }

}

// max = Math.max(...this.quotes.map(quote => quote.likes));
//      maxValues = this.quotes.filter(quote => quote.likes == this.max);
// let maxValue: number = Math.max.apply(
//       Math,
//       this.quotes.map(function (quote) {
//         return quote.upVote;
//       })
//     );
//     let quoteIndex: number = this.quotes.findIndex(
//       (quote) => quote.upVote === maxValue
//     );
