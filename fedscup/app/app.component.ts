import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `    
    <div class="header">
    <h1>{{title}}</h1>      
    <nav>
        <a [routerLink]="['/live']" routerLinkActive="active">Live</a>
        <a [routerLink]="['/scores']" routerLinkActive="active">Scores</a>
    </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
  
  ]
})
export class AppComponent {
  title = 'FEDSCUP 2016';
}