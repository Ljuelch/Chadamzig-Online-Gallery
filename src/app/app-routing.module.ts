import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OriginalsComponent} from "./originals/originals.component";
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  { path: 'originals', component: OriginalsComponent },
  { path: 'landing', component: BodyComponent }, // Keep the /landing route
  { path: '', component: BodyComponent },        // Default route without /landing in the URL
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
