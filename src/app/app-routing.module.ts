import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceListsComponent} from "./components/price-lists/price-lists.component";

const routes: Routes = [
  {
    path: '',
    component: PriceListsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
