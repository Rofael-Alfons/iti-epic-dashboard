import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Modules/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  // Day7
  private httpOptions = {};
  productList: IProduct[] = [];
  // sum:Observable = 0 as Observable;
  // sum:Observable<Number> ;

  constructor(private httpClient: HttpClient) {
    // HttpClient carries all database methods (get, post, patch, put, delete...)

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY',
      }),
    };
  }

  // get all products
  getAllProducts(): Observable<IProduct[]> {
    // const headers = {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'};
    // const path = `https://iti-final-project.onrender.com/Games`;

    return this.httpClient.get<IProduct[]>(
      `https://iti-final-project.onrender.com/Games`,
      this.httpOptions
    );
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
    //   .subscribe((res: Iproduct[]) => {
    //     this.productList = res;
    //  })
  }

  // get products by category id     // https://iti-final-project.onrender.com/Products?CateogryID=3
  getProductsByCategoryId(categoryId: any): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `https://iti-final-project.onrender.com/Games/genres/${categoryId}`,
      this.httpOptions
    );
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }

  // get product by id
  getProductByID(prdID: any): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `https://iti-final-project.onrender.com/Games/${prdID}`,
      this.httpOptions
    );
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
  }

  // add new product
  addNewProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `https://iti-final-project.onrender.com/Games`,
      JSON.stringify(product),
      this.httpOptions
    );
    // {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')
    // }
    // )
  }

  // edit product
  editProduct(id: any, product: IProduct): Observable<IProduct> {
    // this.httpClient.delete<IProduct>(`https://iti-final-project.onrender.com/Games/${product._id}`);
    // return this.httpClient.post<IProduct>(`https://iti-final-project.onrender.com/Games/${product._id}`,JSON.stringify(product), this.httpOptions)
    // {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')
    // }
    // )

    return this.httpClient.patch<IProduct>(
      `https://iti-final-project.onrender.com/Games/${id}`,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  // delete product
  deleteProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      `https://iti-final-project.onrender.com/Games/${product._id}`,
      this.httpOptions
    );
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }
}
