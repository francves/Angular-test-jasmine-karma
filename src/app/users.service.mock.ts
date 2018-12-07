import { Observable, of } from 'rxjs';
import { User } from './user';

export class MockUsersService{
   getAllUser(): Observable<User[]>{
    return of([
      new User('valentina','asas','asas')
    ]);
  }
 }