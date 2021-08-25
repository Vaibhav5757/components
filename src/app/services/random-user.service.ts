import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private httpSvc: HttpService) {}

  getRandomUser() {
    return this.httpSvc.get(
      'https://randomuser.me/api/?inc=name,email,login',
      {}
    );
  }
}
