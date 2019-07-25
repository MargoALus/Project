import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user: User;

  constructor(private http: HttpClient) { }

addUser(userInput: User) {
  return this.http.post('http://localhost:5000/api/auth/register', userInput);
}

setUser(userInput: User) {
  this.user = userInput;
}

getUser() {
  return this.user;
}


login(userInput: User) {
  console.log("userInput");
  return this.http.post('http://localhost:5000/api/auth/login', userInput);
  }


}
