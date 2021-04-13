import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-examples',
  templateUrl: './more-examples.component.html',
  styleUrls: ['./more-examples.component.scss'],
})
export class MoreExamplesComponent implements OnInit {
  asyncData: Promise<any>;
  locationData: Promise<any>;
  someObject = { color: 'green', size: 'medium' };

  ngOnInit() {
    this.asyncData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ fName: 'Steve', lName: 'Witman' });
      }, 2000);
    });
  }

  getLocation() {
    this.locationData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ location: 'Boulder, Colorado' });
      }, 1000);
    });
  }
}
