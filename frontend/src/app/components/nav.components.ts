import {Component} from "@angular/core";
import { IMenu } from "../inerface";

@Component({
  selector:'app-nav',
  template:`
    <ul class="nav nav-pills mb-3">
      <li class="nav-item" *ngFor="let m of menu">
        <a
          [routerLink]="m.href"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}"
           class="nav-link">
          <app-icon [icon]="m.icon"></app-icon>
            {{m.title}}
      </a>
      </li>
    </ul>
  `
})
export class NavComponent {
  menu?:IMenu[]
  constructor() {
    this.menu=[
      {id:1, title:"MainPage",href:"/"},
      {id:2, title:"Users",href:"/users",icon:"bi bi-people"},
    ]
  }
}
