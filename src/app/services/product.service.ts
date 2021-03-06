import {Injectable} from '@angular/core';
import {BehaviorSubject, from} from 'rxjs';
import {Product} from '../interfaces/Models/product';
import {filter, find} from 'rxjs/operators';
import {ManageDataService} from './manage-data.service';
import * as _ from 'lodash';
import {StoreManager} from '../interfaces/store-manager';
import {ActiveView} from '../components/FridgeSection/fridge/fridge.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements StoreManager<Product> {


  private products: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  // tslint:disable-next-line:variable-name
  private _fridgeTab: ActiveView;

  get fridgeTab(): ActiveView {
    return this._fridgeTab;
  }

  set fridgeTab(value: ActiveView) {
    this._fridgeTab = value;
  }

  constructor(private mdService: ManageDataService) {
    const data: Product[] = mdService.getProductsFromLocalStorage();
    if (data !== null) {
      this.products.next(data);
    }
  }

  public getItems() {
    return this.products;
  }

  public insertItem(product: Product) {
    this.products.next([...this.products.getValue(), product]);
    this.synchronizeWithLocalStorage();
  }

  public updateItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore, product]);
    this.synchronizeWithLocalStorage();
  }

  public deleteItem(product: Product) {
    const newStore = this.products.getValue().filter((element) => {
      return element.id !== product.id;
    });
    this.products.next([...newStore]);
    this.synchronizeWithLocalStorage();
  }

  private synchronizeWithLocalStorage() {
    _.debounce(() => this.mdService.updateProductsToLocalStorage(this.products.getValue()), 2500)();

  }

  public getExpiredItems() {
    const source = from(this.products.getValue());
    return source.pipe(filter(product => Date.parse(String(product.expiryDate)) < Date.now().valueOf()));
  }

}
