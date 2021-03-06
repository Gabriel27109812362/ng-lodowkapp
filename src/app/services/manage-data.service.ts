import {Injectable} from '@angular/core';
import {Product} from '../interfaces/Models/product';
import {User} from '../interfaces/Models/user';
import {Note} from '../interfaces/Models/note';
import {Activity} from '../interfaces/Models/activity';
import {Image} from '../interfaces/Models/image';
import {DataManager} from '../interfaces/data-manager';


@Injectable({
  providedIn: 'root'
})
export class ManageDataService implements DataManager {

  constructor() {
  }

  getProductsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products'));
  }

  updateProductsToLocalStorage(products: Array<Product>) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users'));
  }

  updateUsersToLocalStorage(users: Array<User>) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getNotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('notes'));
  }

  updateNotesToLocalStorage(notes: Array<Note>) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  getActivitiesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('activities'));
  }

  updateActivitiesToLocalStorage(activities: Array<Activity>) {
    localStorage.setItem('activities', JSON.stringify(activities));
  }

  getImagesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('images'));
  }

  updateImagesToLocalStorage(images: Array<Image>) {
    localStorage.setItem('images', JSON.stringify(images));
  }

  getWidgetSetFromLocalStorage() {
    return JSON.parse(localStorage.getItem('widgetSet'));
  }

  updateWidgetSetToLocalStorage(widgetSet: object) {
    localStorage.setItem('widgetSet', JSON.stringify(widgetSet));
  }

}
