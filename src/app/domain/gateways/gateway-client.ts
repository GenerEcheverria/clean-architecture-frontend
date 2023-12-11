/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import { Client } from '../entities/client.entity';

export abstract class GatewayClient {
    abstract register(client: Client): Observable<Client>;
    abstract editUser(client: Client, clientId: string): Observable<Client>;
    abstract getActualUser() : Observable<Client>;
}