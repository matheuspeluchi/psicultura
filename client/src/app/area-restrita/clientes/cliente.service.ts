import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Cliente } from './cliente';




const urlApi = 'http://localhost:3000/cliente/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: sessionStorage.getItem('Authorization')
  }),
  observe: 'response' as 'body',
  responseType: 'json' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _cliente = new Cliente();

  private _dataSource = new BehaviorSubject(this._cliente);
  dataSource = this._dataSource.asObservable();
  

  constructor(private http: HttpClient) {
    this.http = http;
  }

  updateDataSource(cliente: Cliente){
    this._dataSource.next(cliente)
  }

  getClientes() {
    return this.http.get<Cliente[]>(urlApi);
  }

  save(cliente: Cliente) {
    return this.http.put<Cliente>(urlApi, cliente, httpOptions);
  }

  update(cliente: Cliente){
    return this.http.post<Cliente>(urlApi + cliente._id ,cliente, httpOptions);
  }
}
