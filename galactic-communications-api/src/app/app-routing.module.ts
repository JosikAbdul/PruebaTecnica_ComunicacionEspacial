import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopSecretComponent } from './top-secret/top-secret.component';

const routes: Routes = [
  { path: 'topsecret', component: TopSecretComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
