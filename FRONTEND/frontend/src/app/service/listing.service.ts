import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from './auth.service'; // authentication service which holds our token

@Injectable({
  providedIn: 'root'
})

export class ListingService {

  listing: Listing;

  constructor(private http: HttpClient) { }
  
  getListings() {
    return this.http.get('http://localhost:5000/api/listings');
  }

  setListing(listingToSet) {
    this.listing = listingToSet;
  }

  getListing() {
    return this.listing;
  }
}

//     this.http.get('http://localhost:5000/api/listings')
//     .subscribe((response) => {
//       if (response) { // successful http request, same format as HttpResponse model / class
//       }
//       else {
//         alert(response); // display an alert if response has an error 
//       }
//       console.log(response);
//     });
//   }

// }

// write a function that's going to GET the data from the server 

// getListings(): any { 
//   return this.http.get('http://localhost:5000/api/listings');


