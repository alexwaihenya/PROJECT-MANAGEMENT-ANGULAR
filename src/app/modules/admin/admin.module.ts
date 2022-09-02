import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CompleteComponent } from './components/complete/complete.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllUsersComponent } from './components/all-users/all-users.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AllTasksComponent,
    CompleteComponent,
    NewTaskComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
