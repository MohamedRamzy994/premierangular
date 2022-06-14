import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {
  apiUrl: string;
constructor() {
  this.apiUrl = 'http://localhost:49895';

}

}
