import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selected: Product;
  public keyword: string;
products : Product[];
product : Product;
 page= 1;
  pageSize = 6;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  Search(){
    this.productService.Search(this.keyword).subscribe(data => {
      console.log(data);
      this.products = data;
     });

  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
     });
   }
}
