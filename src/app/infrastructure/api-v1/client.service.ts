import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/domain/entities/client.entity';
import { GatewayClient } from 'src/app/domain/gateways/gateway-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService extends GatewayClient{

  private readonly URL: string = 'http://localhost:8000/api/account/';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(httpClientParam: HttpClient) {
    super ();
    this.httpClient = httpClientParam;
  }

  public register(client: Client) : Observable <Client> {

    const { name, email, password, role, phone } = client;

    return this.httpClient.post<Client>(this.URL+'register', { name, email, password, role, phone }, this.httpOptions);
  }

  public editUser(client: Client, clientId: string) : Observable <Client>{
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.put<Client>(this.URL+'users/' + clientId, { client, id: clientId }, httpOptions);
  }

  public getActualUser() : Observable<Client>{
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<Client>(this.URL + 'users/getUserData', {}, httpOptions);
  }

}
