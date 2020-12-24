import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isScrolled = false;


  constructor() {
  }


  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80 ? (this.isScrolled = true) :
    (this.isScrolled = false);
  }

  ngOnInit(): void {

  }

}
