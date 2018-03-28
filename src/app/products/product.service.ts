import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';
import { RequestOptions } from '@angular/http';
import { URL_TOKEN } from '../app.constants';

@Injectable() // IMP! This is needed only if the service itself has dependencies, which is our case
export class ProductService {

    private _httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    instanceCounter = 0;
    constructor(private _http: HttpClient, @Inject(URL_TOKEN) private _baseUrl: string) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._baseUrl)
            .do(data => console.log('All fetched'))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        if (id === 0) {
            return Observable.create(this.initializeProduct());
        }
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id))
            // IMP! Operators can be chained, output from previous operator acts like
            // an input to the next operator map => do
            .do(product => console.log('getProduct: ' + JSON.stringify(product)))
            .catch(this.handleError);
    }

    deleteProduct(id: number): Observable<Response> {
        const url = `${this._baseUrl}/${id}`;
        return this._http.delete(url, this._httpOptions)
            .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProduct(product: IProduct): Observable<IProduct> {

        if (product.productId === 0) {
            return this.createProduct(product);
        }
        return this.updateProduct(product);
    }

    private createProduct(product: IProduct): Observable<IProduct> {
        product.productId = undefined;
        return this._http.post<IProduct>(this._baseUrl, product, this._httpOptions)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateProduct(product: IProduct): Observable<IProduct> {
        const url = `${this._baseUrl}/${product.productId}`;
        return this._http.put<IProduct>(url, product, this._httpOptions)
            .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

    private initializeProduct(): IProduct {
        // Return an initialized object
        return {
            productId: 0,
            productName: null,
            productCode: null,
            category: null,
            tags: [],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }
}
