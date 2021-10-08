import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JQuotes } from '../interfaces/JQuotes';
import { MColor } from '../interfaces/mcolor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient : HttpClient) { }

  getRandomQuotes(): Observable<JQuotes>{
    const url = "https://api.quotable.io/random";
   return this.httpClient.get<JQuotes>(url);
  }

  getRandomcolor(): Observable<MColor>{
    const url = " https://random-data-api.com/api/color/random_color";
   return this.httpClient.get<MColor>(url);
  }
}


// https://random-data-api.com/api/color/random_color