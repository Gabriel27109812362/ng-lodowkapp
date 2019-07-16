import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/Models/product';
import {NameDate} from '../../../interfaces/name-date';
import {ProductService} from '../../../services/product.service';

enum Edit {
  YES = 1,
  NOT = 2,
}

@Component({
  selector: 'app-product-cloud',
  templateUrl: './product-cloud.component.html',
  styleUrls: ['./product-cloud.component.scss']
})
export class ProductCloudComponent implements OnInit {

  editable: Edit;
  @Input() product: Product;

  constructor(private prService: ProductService) {

  }

  ngOnInit() {
    if (this.product.name === undefined && this.product.expiryDate === undefined) {
      this.editable = Edit.YES;
    } else {
      this.editable = Edit.NOT;
    }
  }

  changeNameAndDate(value: NameDate) {
    this.product.name = value.name;
    this.product.expiryDate = value.expiry;
    this.prService.updateItem(this.product);
    this.editable = Edit.NOT;
  }

  edit() {
    if (this.editable === Edit.NOT) {
      this.editable = Edit.YES;
    }
  }


}
