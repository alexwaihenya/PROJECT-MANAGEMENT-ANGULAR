import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.router.navigate(['home/login'])
  // }
  onLogout(){
    localStorage.clear()
    this.router.navigate([''])
  }

}
