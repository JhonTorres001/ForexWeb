import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../Services/global';
import { MensajesBot } from '../models/mensajesbot';
import { Observable } from 'rxjs';


@Injectable()
export class MensajesbotService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  get(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get("http://35.173.47.78:8080/api/v1/logger", { headers: headers });
  }

}
