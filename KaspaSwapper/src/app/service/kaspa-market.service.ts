import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KaspaMarketService {
 

  constructor(protected http:HttpClient) { }


  aggiornaDati():Observable<any> {
    return this.http.get("http://urlPorcaMadonna")
  }
}
