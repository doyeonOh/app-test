import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
      },
      {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              {
                path: ':id',
                component: CrisisDetailComponent,
              },
              {
                path: '',
                component: CrisisCenterHomeComponent
              },
              {
                path: 'aaa',
                component: CrisisCenterHomeComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
