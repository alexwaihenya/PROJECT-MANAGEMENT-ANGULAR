import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  constructor() { }

  users!:IUser[]

  ngOnInit(): void {
  }

  update(){

  }

}
