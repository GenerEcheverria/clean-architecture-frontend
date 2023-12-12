import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entities/client.entity';
import { GatewayClient } from '../gateways/gateway-client';


@Injectable({
  providedIn: 'root'
})

export class UseCaseClient {

  private gatewayClient!: GatewayClient;

  constructor(gatewayClientParam: GatewayClient) {
    this.gatewayClient = gatewayClientParam;
  }
  
  register(client: Client): Observable<Client> {
    return this.gatewayClient.register(client);
  }
  editUser(client: Client, clientId: string): Observable<Client> {
    return this.gatewayClient.editUser(client, clientId);
  }
  getActualUser() : Observable<Client>{
    return this.getActualUser();
  }
}