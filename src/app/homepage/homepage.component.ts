import { Component } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  instructors: any[];

  constructor() {

    this.instructors = [
      {
        name: 'Instructor 1',
        designation: 'Designation 1',
        image: 'assets/images/home-cover-one.jpg'
      },
      {
        name: 'Instructor 2',
        designation: 'Designation 2',
        image: 'assets/images/home-cover-two.jpg'
      },
      {
        name: 'Instructor 2',
        designation: 'Designation 2',
        image: 'assets/images/home-cover-three.jpeg'
      }
    ];
  }
}
