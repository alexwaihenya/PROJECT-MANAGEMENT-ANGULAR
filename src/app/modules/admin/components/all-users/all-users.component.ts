import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private apiService:ApiUserService) { }

  users!:IUser[]

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.apiService.getUser().subscribe(res=>{
      this.users = res
      console.log(res);
      

    })
  
  }

  delete(){

  }

}
