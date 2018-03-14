import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { FooterComponent }  from './footer/footer.component';
import { HeaderComponent }  from './header/header-sidenav.component';
import { MenuComponent }  from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';
import { HttpModule } from '@angular/http';
import { Product }  from './product/product.component';
import { EmployeeNameFilter }  from './product/EmployeeNameFilter';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule }  from './app-routing.module';
import { Router } from '@angular/router';
import {DataTableModule} from "angular2-datatable";
import { UserComponent }  from './user/user.component';
// import { MaterialModule, MdDialogModule } from '@angular/material';
// import { appRouterModule } from "./app.routes";




@NgModule({
  declarations: [AppComponent,Product,FooterComponent,HomeComponent,MenuComponent,HeaderComponent,EmployeeNameFilter,UserComponent],
  imports:      [BrowserModule,FormsModule,Ng2PaginationModule,HttpModule,AppRoutingModule,DataTableModule],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { 

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
