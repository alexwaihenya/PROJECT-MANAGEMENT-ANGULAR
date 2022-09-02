import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserTasksComponent } from './Components/user-tasks/user-tasks.component';


@NgModule({
  declarations: [
    UserTasksComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
