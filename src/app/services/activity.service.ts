import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../interfaces/activity';
import {filter, find} from 'rxjs/operators';

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

  public insertItem(activity: Activity) {
    this.activities.next([...this.activities.getValue(), activity]);
  }

  public updateItem(activity: Activity) {

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

  public getItemById(id: string) {
    return this.activities.pipe(
      find(activities => activities === activities.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemsByUserId(userId: string) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.userId === userId;
      }))
    );
  }

  public getItemsByDate(date: Date) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.date === date;
      }))
    );
  }

  public getItemsByPriority(date: Date) {
    return this.activities.pipe(
      filter(activities => activities === activities.filter(element => {
        return element.date === date;
      }))
    );
  }


}
