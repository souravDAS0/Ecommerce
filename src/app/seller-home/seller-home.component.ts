import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  products!: Product[];
  productDeletedMessage: undefined | string;
  deleteIcon = faTrash;
  editIcon = faEdit;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    console.warn(id);
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productDeletedMessage = 'Product is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.productDeletedMessage = undefined;
    }, 3000);
  }

  list() {
    this.productService.getproduct().subscribe((result) => {
      this.products = result;
    });
  }
}
