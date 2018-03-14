import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { Product }  from './product/product.component';
import { HomeComponent }  from './home/home.component';
import { UserComponent }  from './user/user.component';

const appRoutes: Routes = [
  // { path: 'app', component: AppComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'product', component: Product, pathMatch: 'full' },
  { path: 'user', component: UserComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'app',pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}