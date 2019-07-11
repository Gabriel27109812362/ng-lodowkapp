import { Injectable } from '@angular/core';
import {filter, find} from 'rxjs/operators';
import {Image} from '../interfaces/Models/image';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  public images = new BehaviorSubject(Array<Image>());

  constructor() {
  }

  public getItems() {
    return this.images;
  }

  public insertItem(image: Image) {
    this.images.next([...this.images.getValue(), image]);
  }

  public updateItem(image: Image) {

    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore, image]);
  }

  public deleteItem(image: Image) {
    const newStore = this.images.getValue().filter((element) => {
      return element.id !== image.id;
    });
    this.images.next([...newStore]);
  }


  public getItemById(id: string) {
    return this.images.pipe(
      find(images => images === images.filter(element => {
        return element.id === id;
      }))
    );
  }

  public getItemsByUserId(userId: string) {
    return this.images.pipe(
      filter(images => images === images.filter(element => {
        return element.userId === userId;
      }))
    );
  }
}
