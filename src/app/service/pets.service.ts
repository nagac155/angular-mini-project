import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsService {

    constructor(private http: HttpClient) {}

  getSpells(): Observable<any> {
    return this.http.get('https://potterapi-fedeperin.vercel.app/en/spells')
  }

  getDogs(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random')
  }
}
