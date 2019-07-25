import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allUsers: any;
  emailInput: string;
  passwordInput: string;
  userInput: User = new User();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private navCtrl: NavController
    ) { }

  checkLogin() {
    console.log(this.emailInput);
    console.log(this.passwordInput);
    this.userInput.email = this.emailInput;
    this.userInput.password = this.passwordInput;
    this.userService.login(this.userInput).subscribe((response) => {
      if (response == false) {
        console.log('fail');
        this.emailInput = "";
        this.passwordInput = ""
      }
      else {
        this.userService.setUser(response[0]);
        this.navCtrl.navigateForward("listings");
        this.emailInput = "";
        this.passwordInput = ""
      }
    })
  }

  navToRegistration() {
    this.navCtrl.navigateForward("registration");
  }


}