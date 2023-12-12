import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { GatewayUser } from '../gateways/gateway-user';


@Injectable({
  providedIn: 'root'
})

export class UseCaseUser {

  private gatewayUser!: GatewayUser;

  constructor(gatewayUserParam: GatewayUser) {
    this.gatewayUser = gatewayUserParam;
  }

  login(user: User): Observable<User> {
    return this.gatewayUser.login(user);
  }
  logout(): Observable<User> {
    return this.gatewayUser.logout();
  }
}