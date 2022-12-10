import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor() { }
  
  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.latlng.lng }</div>` +
      `<div>State: ${ data.latlng.lat }</div>` +
      `<p>You can reach Michael at:</p>

      <ul>
        <li><a href="https://example.com">Website</a></li>
        <li><a href="mailto:m.bluth@example.com">Email</a></li>
        <li><a href="tel:+123456789">Phone</a></li>
      </ul> 
      <button class="favorite styled"
      type="button">
      Supprimer
      </button>
      <button class="favorite styled"
      type="button">
      ajouter
      </button> `
  }
}
