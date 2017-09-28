import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { HeroiDetalheComponent }  from './heroi-detalhe/heroi-detalhe.component';
import { HeroisComponent }        from './herois/herois.component';
import { HeroiService}            from './heroi.service';
import { DashboardComponent }     from './dashboard/dashboard.component'

import { AppRoutingModule } from './app-routing.module';
import { HeroiSearchComponent } from './heroi-search/heroi-search.component'



@NgModule({
  declarations: [
    AppComponent,
    HeroiDetalheComponent,
    HeroisComponent,
    DashboardComponent,
    HeroiSearchComponent
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    
  ],

  providers: [ HeroiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
