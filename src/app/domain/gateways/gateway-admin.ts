/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import { Admin } from '../entities/admin.entity';

export abstract class GatewayAdmin {
    abstract getUser(userId: string): Observable<Admin>;
    abstract getUsers(): Observable<Admin>;
    abstract deleteUser(userId: string): Observable<Admin>;
}