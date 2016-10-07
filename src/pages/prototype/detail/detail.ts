import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PaxPickerModal } from './pax-picker/pax-picker';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  items = [
    {
      day: '1일',
      contents: [
        { time: '10:00', subject: 'BKK 도착'},
        { time: '11:00', subject: 'XX호텔 도착'},
        { time: '12:00', subject: '점심식사'},
        { time: '13:00', subject: '요트 투어'},
        { time: '14:00', subject: '시내 탐방'},
        { time: '15:00', subject: '쇼핑센터 방문'},
        { time: '16:00', subject: '자유시간'},
        { time: '17:00', subject: '호텔로 이동'},
        { time: '18:00', subject: '저녁 식사'}
      ]
    },
    {
      day: '2일',
      contents: [
        { time: '10:00', subject: 'BKK 도착'},
        { time: '11:00', subject: 'XX호텔 도착'},
        { time: '12:00', subject: '점심식사'},
        { time: '13:00', subject: '요트 투어'},
        { time: '14:00', subject: '시내 탐방'},
        { time: '15:00', subject: '쇼핑센터 방문'},
        { time: '16:00', subject: '자유시간'},
        { time: '17:00', subject: '호텔로 이동'},
        { time: '18:00', subject: '저녁 식사'}
      ]
    }
  ];

  constructor(public modalCtrl: ModalController) {

  }

  clickItem() {
    let modal = this.modalCtrl.create(PaxPickerModal);
    modal.present();
  }


}
