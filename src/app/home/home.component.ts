import { Component } from '@angular/core';
// import { HomeComponent }  from './home.component';
import { Product } from '../product/product.component';

@Component({
  selector: 'home-app',
  templateUrl: `../home/home.component.html`,
  styleUrls: ['../home/home.component.css']
})
export class HomeComponent  { 
  // appTitle: string = 'Amit';
  // appStatus: boolean=true;
  // model = new Product(2,'ProductA');

  // appList: any[] = [
  //                     {
  //                     "ID": "1",
  //                     "Name" : "One"
  //                     },
  //                     {
  //                     "ID": "2",
  //                     "Name" : "Two"
  //                     }
  //                 ];



                //   clickMessage = '';
                //   dataJson2: any[];
                //   dataJson1: any[] = [
                //     {
                //     "ProductID": "1",
                //     "ProductName" : "One"
                //     },
                //     {
                //     "ProductID": "2",
                //     "ProductName" : "Two"
                //     }
                // ];
                //  iproducts: IProduct[]=[];
                //  consumAppsRoles:any;
                // model: any = {};
                //  profile = {};
                 
                   
                //   value: string = "";
                //   // constructor(private _appService: appService) {
                //   // }
                //   constructor(private _productService: ProductService) {
                //   }
                //   ngOnInit(): void {
                //     console.log('consumAppsRoles:------'+this.consumAppsRoles);
                //   // this._productService.getproducts().subscribe(iproducts =>this.iproducts=iproducts);
                //   this._productService.getproducts().subscribe(
                //     resp => {
                    
                //       this.consumAppsRoles = resp;
                //     }
                //   ); 
                //   }
                
                //   onClickMe() {
                //     console.log("onClickMe() is called...");
                //   }
                
                //   create(product: IProduct) {
                //     console.log(".........product........."+product);
                //     return product;
                // }
                
                // register() {
                //   this.create(this.model);
                //   this._productService.saveProductData(this.model);
                //   console.log(".........model........."+this.model);
                // }

}
