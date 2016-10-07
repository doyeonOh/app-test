import { Component } from '@angular/core';

import { ModalController, ViewController } from 'ionic-angular';

import { PickFlightModal } from '../pick-flight/pick-flight';

@Component({
  selector: 'page-pax-picker',
  templateUrl: 'pax-picker.html'
})
export class PaxPickerModal {

  constructor(
      public modalCtrl: ModalController,
      public viewCtrl: ViewController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  next() {
    let modal = this.modalCtrl.create(PickFlightModal);
    modal.present();
  }

}
