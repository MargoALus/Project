import { Component, OnInit } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

bookings: any

  constructor() { }

  ngOnInit() {
  }

}
