import { Component } from '@angular/core';

import { ModalController, ViewController } from 'ionic-angular';

import { PickHotelModal } from '../pick-hotel/pick-hotel';


@Component({
  selector: 'page-pick-flight',
  templateUrl: 'pick-flight.html'
})
export class PickFlightModal {

  constructor(
      public modalCtrl: ModalController,
      public viewCtrl: ViewController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  next() {
    let modal = this.modalCtrl.create(PickHotelModal);
    modal.present();
  }

}
