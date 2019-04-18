import { StockService } from './services/bll/stock.service';
import { LookupsService } from './services/bll/lookups.service';
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
import { OrdersService } from './services/bll/orders.service';
import { UserAppPageModule } from './user-app/user-app.module';
import { StockPipePipe } from './pipes/stock-pipe.pipe';

@NgModule({
  declarations: [AppComponent, StockPipePipe],
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
    CheckPageModule,
    UserAppPageModule
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
    UserService,
    LookupsService,
    OrdersService,
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
