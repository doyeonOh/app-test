import { Routes } from '@angular/router';
import { MainPage } from '../pages/prototype/main/main';
import { ListPage } from '../pages/prototype/list/list';
import { DetailPage } from '../pages/prototype/detail/detail';
import { SamplePage } from '../pages/prototype/sample/sample.component';

export const routes: Routes = [
  {
    path: '',
    // component: HomePage
    component: MainPage
  },
  {
    path: 'list',
    // redirectTo: '/'
    component: ListPage
  },
  {
    path: 'detail',
    // redirectTo: '/'
    component: DetailPage
  },
  {
    path: 'sample',
    // redirectTo: '/'
    component: SamplePage
  }
];
