import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login-page/login-page.component';
import { MainPage } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LoginPage},
      {path: 'main-page', component: MainPage}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
