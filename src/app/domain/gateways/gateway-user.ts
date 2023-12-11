/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export abstract class GatewayUser {
    abstract login(user: User): Observable<User>;
    abstract logout(): Observable<User>;
}