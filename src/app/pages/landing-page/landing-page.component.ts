import { Component, OnInit } from '@angular/core';
import { ITile } from '../../tile/tile.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  skillInformation :Array<ITile> =[
    {
      name: 'HTML',
     // description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
     // description: 'I will style webpagws using CSS3, leveraging on the new CSS3 modules, making modern websites.',
      imgURL: 'assets/images/css.png'
    },
    {
      name: 'Responsive Web Design',
     // description: 'I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.',
      imgURL: 'assets/images/responsive.png'
    },
    {
      name: 'jQuery',
     // description: 'aaaa',
      imgURL: 'assets/images/jquery.png'
    },
    {
      name: 'Firebase',
    //  description: 'aaaa',
      imgURL: 'assets/images/firebase.png'
    },
    {
      name: 'Node',
     // description: 'aaaa',
      imgURL: 'assets/images/js.png'
    },
    {
      name: 'MongoDb',
      //description: 'aaaa',
      imgURL: 'assets/images/mongodb.png'
    },
    {
      name: 'Node',
     // description: 'aaaa',
      imgURL: 'assets/images/node.png'
    },
    {
      name: 'Ds',
      //description: 'aaaa',
      imgURL: 'assets/images/ds.png'
    },  
    {
      name: 'ts',
      //description: 'aaaa',
      imgURL: 'assets/images/ts.png'
    }, 
    {
      name: 'npm',
      //description: 'aaaa',
      imgURL: 'assets/images/npm.png'
    }, 
    {
      name: 'Gh',
      //description: 'aaaa',
      imgURL: 'assets/images/gh.png'
    }
    
    
    
  ]

  constructor() {
  
   }

  ngOnInit() {
  }

}
