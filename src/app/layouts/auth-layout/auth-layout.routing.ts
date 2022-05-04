import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/examples/login/login.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { PresentationComponent } from "../../pages/presentation/presentation.component";
import {ListusersComponent} from '../../pages/examples/listusers/listusers.component';
import {TimelineComponent} from '../../pages/examples/timeline/timeline.component';

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "pricing/:id",
        component: PricingComponent
      }
    ]
  },
  {
    path:"",
    children:[
      {
        path:"timeline/:id",
        component: TimelineComponent
      }
    ]
  }
];
