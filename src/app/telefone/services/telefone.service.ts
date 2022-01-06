import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_api}/telefones`)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${environment.url_api}/telefones/${id}`)
  }
  save(phone: any): Observable<any> {
    return this.http.post(`${environment.url_api}/telefones`, phone)
  }
  update(id: any, phone: any): Observable<any> {
    return this.http.put(`${environment.url_api}/telefones/${id}`, phone)
  }
  destroy(id: any): Observable<any> {
    return this.http.delete(`${environment.url_api}/telefones/${id}`)
  }
}
