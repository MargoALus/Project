import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private navController: NavController) { }

  login(email, password) {
    this.http.post('http://localhost:5000/api/users', {email: email, password: password})
    .subscribe((response) => {
      if (response) { 
        this.navController.navigateForward('users'); // navigate to the users page
      }
      else {
      console.log(response); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  register(user) {
    this.http.post('http://localhost:5000/api/auth/register', user)
    .subscribe((response) => {
      if (response) { // successful http request, same format as HttpResponse model / class
      }
      else {
        alert(response); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

}
