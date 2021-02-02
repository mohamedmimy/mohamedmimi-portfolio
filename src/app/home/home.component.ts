import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import Typed from 'typed.js';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){ }

  ngOnInit(): void {
    // plugin WoWJS

    // plugin TypedJS
    const typed = new Typed('.effact', {
      strings: [
        'Front End Developer ',
         'Digital marketing specialist'
        ] ,
      typeSpeed: 60,
      fadeOut: true,
      loop: true
    });
  }

  rest(){
  }

}
