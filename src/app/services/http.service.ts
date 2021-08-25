import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options: any) {
    return this.http.get(url, options);
  }

  post(url: string, data: any, options: any){
    return this.http.post(url, data, options);
  }
}
