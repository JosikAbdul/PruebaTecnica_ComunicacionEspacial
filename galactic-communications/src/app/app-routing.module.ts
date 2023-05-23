import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from './radar/radar.component';

const routes: Routes = [
  { path: '', redirectTo: '/radar', pathMatch: 'full' },
  { path: 'radar', component: RadarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
