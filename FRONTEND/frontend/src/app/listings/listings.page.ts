import { Component, OnInit } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  // listings = [{title: 'first listing'}];
  listings: any;

  constructor(private listingService: ListingService, private navCtrl: NavController) { 
    // this.listings = listingService.getListings();
  }

  ngOnInit() {
    this.listingService.getListings().subscribe((response) => {
      this.listings = response; 
      this.navCtrl.navigateForward("listings");
    });
  }
  navToBookings() {
    this.navCtrl.navigateForward("bookings");
  }

} 
