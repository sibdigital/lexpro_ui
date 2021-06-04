import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login-page/login-page.component';
import { MainPage } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field'
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CompilerConfig } from '@angular/compiler'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSidenav, MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login',  component: LoginPage},
      {path: 'main-page', component: MainPage}
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    MatLabel,
    MatSidenav,
    CompilerConfig,
    MatSidenavContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
