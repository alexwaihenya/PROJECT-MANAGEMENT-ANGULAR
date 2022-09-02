import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CompleteComponent } from './components/complete/complete.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

const routes: Routes = [
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'new',component:NewTaskComponent},
    {path:'all',component:AllTasksComponent},
    {path:'users',component:AllUsersComponent},
    {path:'complete',component:CompleteComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
