import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    img: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]),
    price: new FormControl('',[Validators.required, Validators.pattern('[0-9]{1,}')]),
    desc: new FormControl('', Validators.required)
  })

  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl("/admin/product")
    });
  }
}
