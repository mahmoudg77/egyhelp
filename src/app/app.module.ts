import { CheckPageModule } from './check/check.module';
import { UserService } from './services/user.service';
import { ImageUploaderService } from './services/dal/image-uploader.service';
import { CallapiService } from './services/dal/callapi.service';
import { AuthService } from './services/auth/auth.service';
import { LoginUserModule } from './login-user/login-user.module';
import { LoginClientPageModule } from './login-client/login-client.module';
import { SharedService } from './services/shared.service';
import { LoadingService } from './services/loading.service';
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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ClientAppModule,
    HomePageModule,
    LoginClientPageModule,
    LoginUserModule,
    HttpClientModule,
    CheckPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoadingService,
    SharedService,
    AuthService,
    CallapiService,
    ImageUploaderService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
