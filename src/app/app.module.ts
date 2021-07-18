import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FilterdatePipe } from './filterdate.pipe';
import { HighestvotesDirective } from './highestvotes.directive';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    VoteComponent,
    QuoteFormComponent,
    FilterdatePipe,
    HighestvotesDirective,
    QuotedetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
