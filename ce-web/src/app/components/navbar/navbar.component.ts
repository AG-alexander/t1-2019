import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from 'src/app/services/service-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _serviceLogin: ServiceLoginService) { }

  logout() {
    this._serviceLogin.logout();
  }

  ngOnInit() {
  }

}
