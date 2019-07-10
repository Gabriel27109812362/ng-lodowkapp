import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public activities = new BehaviorSubject(Array<Activity>());

  constructor() {
  }

  public getItems() {
    return this.activities;
  }

  public insertItems(activity: Activity) {
    this.activities.next([...this.activities.getValue(), activity]);
  }

  public updateItems(activity: Activity) {

    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore, activity]);
  }

  public deleteItem(activity: Activity) {
    const newStore = this.activities.getValue().filter((element) => {
      return element.id !== activity.id;
    });
    this.activities.next([...newStore]);
  }

}
