import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../Services/global';
import { Preguntas } from '../models/preguntas';
import { Observable } from 'rxjs';
import { TagContentType } from '@angular/compiler';
import { Params } from '@angular/router';

@Injectable()
export class PreguntasService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(preguntas: Preguntas): Observable<any> {
    let params = JSON.stringify(preguntas);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(params);
    return this._http.post(this.url, params, { headers: headers });
  }

  get(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(this.url, { headers: headers });
  }

  update(preguntas: Preguntas): Observable<any> {

    let headers = new HttpHeaders();
    let params = JSON.stringify(preguntas);
    
    console.log("JHON TTTT");
    console.log(params);

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this.url + 'update', params, {headers: headers });
  }
}
