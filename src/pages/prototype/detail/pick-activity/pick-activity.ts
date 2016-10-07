import { Component } from '@angular/core';

import { ModalController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-pick-activity',
  templateUrl: 'pick-activity.html'
})
export class PickActivityModal {

  constructor(
      public modalCtrl: ModalController,
      public viewCtrl: ViewController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickItem() {
    
  }



}
