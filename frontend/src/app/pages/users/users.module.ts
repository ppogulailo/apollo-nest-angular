import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule} from "@angular/router";
import {IconModule} from "../../components/icon/icon.module";
import { UserCardComponent } from './user-card/user-card.component';
import {UserFormModule} from "../../components/user-form/user-form.module";




@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: UsersComponent, children: [
                    {path: ':id', component: UserCardComponent},
                ],
            },
        ]),
        IconModule,
        UserFormModule,

    ]
})
export class UsersModule { }
