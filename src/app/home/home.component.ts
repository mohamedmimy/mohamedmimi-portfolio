import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){
    // tslint:disable-next-line: no-var-keyword

  }

  ngOnInit(): void {
    let typed = new Typed('.effact', {
      strings: [
        'Front End Developer ',
         'Digital marketing specialist'
        ] ,
      typeSpeed: 60,
      fadeOut: true,
      loop: true
    });
  }

}
