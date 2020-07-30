import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
        this.productService.getProduct(param.productID).subscribe(data =>
           this.product = data);
    })
  }
}
