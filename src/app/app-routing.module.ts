import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPage } from '../pages/prototype/main/main';
import { ListPage } from '../pages/prototype/list/list';
import { DetailPage } from '../pages/prototype/detail/detail';
import { SamplePage } from '../pages/prototype/sample/sample.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
      },
      {
        path: 'main',
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
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
