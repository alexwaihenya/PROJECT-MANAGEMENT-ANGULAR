import { Component, OnInit } from '@angular/core';
import { NgForm,  } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { ApiUserService } from '../../services/api.user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  // @ViewChild('form') form!:NgForm

  user!:IUser[]

  constructor(private http:HttpClient,private apiService:ApiUserService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(data:IUser){
    console.log(data);

    let val = data

    if(val.email && val.password){
      this.apiService.login(val.email,val.password)
      .subscribe(()=>{
        console.log('user logged in...');
        this.router.navigate(['user/usertasks'])
        
      })
    }


    

  
  }
 

}
