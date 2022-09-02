import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTasksComponent } from './Components/user-tasks/user-tasks.component';

const routes: Routes = [

  {path:'usertasks',component:UserTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
