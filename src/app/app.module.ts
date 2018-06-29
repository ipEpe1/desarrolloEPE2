import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartPageModule } from '../pages/start/start.module';
import { RegisterPageModule } from '../pages/register/register.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCNyo22PRX-unMdmqIQT2tPaYjexDYwXs0",
  authDomain: "centromedicobleh.firebaseapp.com",
  databaseURL: "https://centromedicobleh.firebaseio.com",
  projectId: "centromedicobleh",
  storageBucket: "centromedicobleh.appspot.com",
  messagingSenderId: "744366834049"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StartPageModule,
    RegisterPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
