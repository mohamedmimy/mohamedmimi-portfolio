import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(){}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void { }

}
