import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fakeToken = 'a7b3c9975791294647265c71224a88ad';
  constructor() { }

  getToken(): string {
    return this.fakeToken;
  }
}
