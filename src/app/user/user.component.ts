import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user-model';


@Component({
  selector: 'user-app',
  templateUrl: '../user/user.component.html',
  styleUrls: ['../user/user.component.css'],
  providers: [UserService]
})
export class UserComponent  { 
  private userData=[];

  


  constructor(private userService : UserService) {
    console.log('............productService...........'+this.userData);
   }

  ngOnInit() : void{
     this.findEmployeeDetails();
    }

  private findEmployeeDetails(){

          this.userService.getproducts().subscribe( data=>{
          //this.userData=data;
           this.userData.push(data);
 
               
      });
    
  }

 
}
