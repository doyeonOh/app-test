import { Component } from '@angular/core';

import { ModalController, ViewController } from 'ionic-angular';

import { PickActivityModal } from '../pick-activity/pick-activity';

@Component({
  selector: 'page-pick-hotel',
  templateUrl: 'pick-hotel.html'
})
export class PickHotelModal {

  constructor(
      public modalCtrl: ModalController,
      public viewCtrl: ViewController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  next() {
    let modal = this.modalCtrl.create(PickActivityModal);
    modal.present();
  }

}
