import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { MainPage } from '../pages/prototype/main/main';
import { ListPage } from '../pages/prototype/list/list';
import { DetailPage } from '../pages/prototype/detail/detail';
import { PaxPickerModal } from '../pages/prototype/detail/pax-picker/pax-picker';
import { PickFlightModal } from '../pages/prototype/detail/pick-flight/pick-flight';
import { PickActivityModal } from '../pages/prototype/detail/pick-activity/pick-activity';
import { PickHotelModal } from '../pages/prototype/detail/pick-hotel/pick-hotel';

import { SamplePage } from '../pages/prototype/sample/sample.component';

import { CrisisCenterModule } from './crisis-center/crisis-center.module';


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(routes),
    CrisisCenterModule
  ],
  declarations: [
    MyApp,
    // mine
    MainPage,
    ListPage,
    DetailPage,
    PaxPickerModal,
    PickFlightModal,
    PickHotelModal,
    PickActivityModal,
    SamplePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ListPage,
    DetailPage,
    PaxPickerModal,
    PickFlightModal,
    PickHotelModal,
    PickActivityModal,
    SamplePage
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ]
})
export class AppModule {}
