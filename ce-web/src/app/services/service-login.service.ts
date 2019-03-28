import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  readonly USERLOG = "userLog";
  constructor(private _router: Router, private _dataStorage: DataStorageService) { }

  loginUser(username, password) {
    this._dataStorage.setObjectValue(this.USERLOG, username);
  }

  isLogged(): boolean {
    let aux: string = this._dataStorage.getObjectValue(this.USERLOG) as string;
    return !(aux == null);
  }

  logout() {
    if (window.localStorage) {
      localStorage.removeItem(this.USERLOG);
      this._router.navigate(['/login']);
    } 
  }
}
