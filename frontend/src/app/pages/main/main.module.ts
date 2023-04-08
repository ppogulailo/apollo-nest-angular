import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {UsersComponent} from "../users/users.component";



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:MainComponent}
    ])
  ]
})
export class MainModule { }
