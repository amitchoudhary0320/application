import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from '../product/product-model';

@Injectable()
export class ProductService{
private _producturl='http://localhost:8002/angular2/webresource-2/getAllEmployeeDetails';
private _saveproducturl='http://localhost:8002/angular2/webresource-2/saveEmployeeData';
constructor(private _http: Http){}
consumApps:any;

getproducts(): Observable<IProduct[]>
{
return this._http.get(this._producturl)
.map(this.extractData)
.catch(this.handleError);
}

private extractData(res: Response) {
    let body = res.json();

    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    
    return Observable.throw(errMsg);
  }
}