import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppComponent 
  ],
  providers: [],
})

export class AppModule { }
