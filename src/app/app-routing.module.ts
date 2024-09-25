import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OriginalsComponent} from "./originals/originals.component";
import {BodyComponent} from "./body/body.component";
import {PrintsComponent} from "./prints/prints.component";
import {SketchesComponent} from "./sketches/sketches.component";

const routes: Routes = [
  { path: 'originals', component: OriginalsComponent },
  { path: 'prints', component: PrintsComponent },
  { path: 'sketches', component: SketchesComponent },
  { path: 'landing', component: BodyComponent },
  { path: '', component: BodyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
