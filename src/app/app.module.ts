import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { KwetterCmpComponent } from './kwetter-cmp/kwetter-cmp.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component'
import { Routes, RouterModule } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
     AppComponent,
     KwetterCmpComponent,
     ProfileComponent,
     HomeComponent,
    ],
  imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpModule,
    RouterModule.forRoot([
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: KwetterCmpComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'home', component: HomeComponent },
          { path: '**', redirectTo: 'login' }
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }