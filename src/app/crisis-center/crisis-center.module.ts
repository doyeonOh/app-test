import { NgModule }       from '@angular/core';

import { CommonModule } from '@angular/common';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisDetailComponent
  ],
  exports: [
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule { }
