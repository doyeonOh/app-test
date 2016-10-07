import { Component, AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


@Component({
  template: `<router-outlet></router-outlet>`
})
export class MyApp implements AfterViewInit {

  constructor(private _platform: Platform) {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this._platform.ready().then(() => {
    });
  }
}
