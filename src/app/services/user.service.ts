import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = new BehaviorSubject(Array<User>());

  constructor() {
  }

  public getItems() {
    return this.users;
  }

  public insertItem(user: User) {
    this.users.next([...this.users.getValue(), user]);
  }

  public updateItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore, user]);
  }

  public deleteItem(user: User) {
    const newStore = this.users.getValue().filter((element) => {
      return element.id !== user.id;
    });
    this.users.next([...newStore]);
  }
}
