import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { IProduct } from '../product/product-model';

@Component({
  selector: 'product',
  templateUrl: `../product/product.component.html`,
  styleUrls: ['../product/product.component.css'],
  providers: [ProductService]
})
export class Product {
  errorMessage: String;
  public product=new IProduct();


  /* pass the hard coded data instead fo the Rest Call */

  productData:any=[
    { 
      name:'atom',
      email:'atom@431',
      policyNo:'234567889'
    },

    { 
      name:'tom',
      email:'tom@431',
      policyNo:'234567889'
    },


    { 
      name:'david',
      email:'david@431',
      policyNo:'234567889'
    }
     
    ]
    
    

  

    constructor(private productService : ProductService) {
      console.log('............productService...........'+productService);
     }

     ngOnInit() : void{
      //  this.findEmployeeDetails();
      }

    // private findEmployeeDetails(){

    //         this.productService.getproducts().subscribe( data=>{
    //         this.productData=data;
   
                 
    //     });
      
    // }
}