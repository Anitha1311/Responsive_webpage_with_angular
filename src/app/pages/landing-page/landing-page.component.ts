import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS',
     description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/css.png'
    },
    {
      name: 'Responsive Web Design',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/responsive.png'
    },
    {
      name: 'UI & UX Design',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/ui-ux.png'
    },
    {
      name: 'Angular 2',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/angular2.png'
    },
    {
      name: 'Express',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/express.png'
    },
    {
      name: 'MongoDb',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/mongodb.png'
    },
    {
      name: 'TypeScript',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/ts.png'
    },
    {
      name: 'RxJS',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/RxJS.png'
    },  
    {
      name: 'Unix',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/unix.png'
    }, 
    {
      name: 'Ionic',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/ionic.png'
    }, 
    {
      name: 'Docker',
      description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imgURL: 'assets/images/docker.png'
    }
    
    
    
  ]

  constructor() {
  
   }

  ngOnInit() {
  }

}
