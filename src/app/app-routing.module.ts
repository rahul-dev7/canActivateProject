import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard-layout.component';
import { AddressComponent } from './address/address.component';
import { AuthGuardService } from './authentication/services';

const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]
  },
  {
    path: 'login',
    loadChildren:() => import('./authentication/auth.module').then(m=> m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
