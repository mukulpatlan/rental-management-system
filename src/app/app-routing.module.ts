import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full',
  },
  {
    path: 'select',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: 'select',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
