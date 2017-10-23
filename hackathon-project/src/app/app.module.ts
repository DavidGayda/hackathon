import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'  },
  { path: 'Home', component: AppComponent },
  { path: 'Tab1', component: CalendarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
