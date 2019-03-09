import { SharedService } from './services/shared.service';
import { LoadingService } from './services/loading.service';
import { LoginPage } from './login/login.page';
import { HomePageModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientAppModule } from './client-app/client-app.module';
import { LoginPageModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ClientAppModule,
    HomePageModule,
    LoginPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoadingService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
