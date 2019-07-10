import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Image} from '../interfaces/image';

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

  public insertItems(image: Image) {
    this.images.next([...this.images.getValue(), image]);
  }

  public updateItems(image: Image) {

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
}
