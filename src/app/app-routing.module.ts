import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OriginalsComponent} from "./originals/originals.component";
import {BodyComponent} from "./body/body.component";
import {PrintsComponent} from "./prints/prints.component";

const routes: Routes = [
  { path: 'originals', component: OriginalsComponent },
  { path: 'prints', component: PrintsComponent },
  { path: 'landing', component: BodyComponent },
  { path: '', component: BodyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
