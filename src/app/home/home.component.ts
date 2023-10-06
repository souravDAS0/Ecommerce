import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | Product[];
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.getPopularProducts().subscribe((data) => {
      console.log(data);
      this.popularProducts = data;
    });
  }
}
