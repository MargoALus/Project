import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // FRONT-END PROCESS
    // 1. Create a variable
    // 2. Put data in it (from the HTML or from the backend)
    // 3. Send it to the backend || OR show it to the user
  allUsers: any;
  firstnameInput: string;
  lastnameInput: string;
  emailInput: string;
  passwordInput: string;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController)  {}

  ngOnInit() {
  }

postNewUser() {
  this.http.post('http://localhost:5000/api/users/create', {
      firstname: this.firstnameInput,
      lastname: this.lastnameInput,
      email: this.emailInput,
      password: this.passwordInput, // This object is turned into req.body in the backend.
      role: "user"
    }).subscribe((response) => {
      console.log(response);
      // Store this user somewhere (probably in userservice)
      this.firstnameInput = "";
      this.lastnameInput = "";
      this.emailInput = "";
      this.passwordInput = "";
      this.navCtrl.navigateForward("home");
    });
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
} 
