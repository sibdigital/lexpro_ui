import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CompilerConfig } from '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login-page/login-page.component';
import { MainPage } from './main-page/main-page.component';
import { MainPageModule } from './main-page/main-page.module';
//material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSidenav, MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage
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
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPage },
      { path: 'main-page', component: MainPage }
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MainPageModule,
    MatTabsModule
  ],
  providers: [
    MatLabel,
    MatSidenav,
    CompilerConfig,
    MatSidenavContent
  ],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule { }
