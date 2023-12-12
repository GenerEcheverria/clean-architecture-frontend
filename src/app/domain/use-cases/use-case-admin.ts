import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../entities/admin.entity';
import { GatewayAdmin } from '../gateways/gateway-admin';

@Injectable({
  providedIn: 'root'
})

export class UseCaseAdmin {

  private gatewayAdmin!: GatewayAdmin;

  constructor(gatewayAdminParam: GatewayAdmin) {
    this.gatewayAdmin = gatewayAdminParam;
  }

  getUser(userId: string): Observable<Admin>{
    return this.gatewayAdmin.getUser(userId);
  }
  deleteUser(userId: string): Observable<Admin>{
    return this.gatewayAdmin.deleteUser(userId);
  }
}