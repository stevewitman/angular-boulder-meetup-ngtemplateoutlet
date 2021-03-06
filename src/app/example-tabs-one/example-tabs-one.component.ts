import { Component } from '@angular/core';

@Component({
  selector: 'app-example-tabs-one',
  templateUrl: './example-tabs-one.component.html',
  styleUrls: ['./example-tabs-one.component.scss'],
})
export class ExampleTabsOneComponent {
  prodImages = [
    {
      id: 0,
      thumbUrl: 'Big_Agnes_Onyx_UL_Tarp-sm-01.jpg',
      imgUrl: 'Big_Agnes_Onyx_UL_Tarp-lg-01.jpg',
    },
    {
      id: 1,
      thumbUrl: 'Big_Agnes_Onyx_UL_Tarp-sm-02.jpg',
      imgUrl: 'Big_Agnes_Onyx_UL_Tarp-lg-02.jpg',
    },
    {
      id: 2,
      thumbUrl: 'Big_Agnes_Onyx_UL_Tarp-sm-03.jpg',
      imgUrl: 'Big_Agnes_Onyx_UL_Tarp-lg-03.jpg',
    },
  ];

  selectedTab;

  initialTab = this.prodImages[0];
}
