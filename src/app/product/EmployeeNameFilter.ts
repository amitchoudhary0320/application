import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { IProduct } from '../product/product-model';

@Pipe({
  name: 'employeeNameFilter'
})
@Injectable()
export class EmployeeNameFilter implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
   if(value == null || value === ""){
     return items;
   }
   return items.filter(it => it[field] == value);
  }
}