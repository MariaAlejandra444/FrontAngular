import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "order", component: OrderComponent },
  //{ path: "home", component: IndexComponent },
  //{ path: "profile", component: ProfilepageComponent },
  //{ path: "register", component: RegisterpageComponent },
  //{ path: "landing", component: LandingpageComponent },
  //{ path: "", redirectTo: "order", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
