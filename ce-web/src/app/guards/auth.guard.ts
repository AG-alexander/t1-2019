import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceLoginService } from '../services/service-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private _router: Router, private _loginService: ServiceLoginService) { }
  canActivate() {
    if (!this._loginService.isLogged()) {
      this._router.navigate(['/login']);
      alert("No estás logueado");
      return false;
    }
    return true;
  }
}
