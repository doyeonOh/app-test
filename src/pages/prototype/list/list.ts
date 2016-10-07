import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [
    { title: 'first'  },
    { title: 'second' },
    { title: 'third'  },
    { title: 'fourth' }
  ];

  constructor() {

  }

  itemSelected() {
    console.log('item selected!');
  }

}
