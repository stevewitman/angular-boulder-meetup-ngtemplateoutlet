import { Component } from '@angular/core';

@Component({
  selector: 'app-example-tabs-two',
  templateUrl: './example-tabs-two.component.html',
  styleUrls: ['./example-tabs-two.component.scss'],
})
export class ExampleTabsTwoComponent {
  resorts = [
    {
      id: 0,
      label: 'Aspen Mountain',
      description:
        'There is no denying the unique personality of Aspen Mountain. Rising from the vibrant heart of downtown Aspen, this is where it all began in 1946 with the single-seat Lift 1, which immediately became the longest chairlift in the world. That mentality of “go big or go home” has always been at the foundation of the mountain they still call “Ajax.”',
      imgUrl: 'aspen_mountain.png',
    },
    {
      id: 1,
      label: 'Aspen Highlands',
      description:
        'Aspen Highlands may just be one ridge over from Aspen Mountain and Buttermilk, but it is truly in a world all its own. Adored by locals and elite skiers and riders, the mountain has a duct-tape-to-diamonds vibe that is on display with the double-black steeps of Highland Bowl and the raucous après ski scene at Cloud Nine Alpine Bistro.',
      imgUrl: 'aspen_highlands.png',
    },
    {
      id: 2,
      label: 'Snowmass',
      description:
        'Aptly named, Snowmass offers an abundance of deep snow and a vast expanse of terrain that includes 94 trails and the largest vertical descent of any resort in North America. With excellent dining facilities across the mountain, tubing lanes, the Breathtaker Alpine Coaster, and the Treehouse Kids Adventure Center at the base, Snowmass is also a favorite among families and groups. With the newly redesigned and enhanced Base Village including a larger Four Mountain Sports and a new Limelight Hotel Snowmass, this mountain keeps proving that it only gets better and better.',
      imgUrl: 'snowmass.png',
    },
    {
      id: 3,
      label: 'Buttermilk',
      description:
        "Buttermilk is home to ESPN’s Winter X Games, two extraordinary terrain parks and a world-famous 22-foot Superpipe. But on most days, it feels like it's just you and the mountain, with miles of groomers and glades to explore at your leisure. The addition of The Hideout Children’s Center at Buttermilk’s base makes it the perfect place for kids to learn.",
      imgUrl: 'buttermilk.png',
    },
  ];

  selectedTab;

  initialTab = this.resorts[0];
}
