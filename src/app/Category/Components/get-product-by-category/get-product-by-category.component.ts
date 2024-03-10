import { Component } from '@angular/core';
import { ProductCategory } from '../../Model/category';
import { CategoryService } from '../../Service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-product-by-category',
  standalone: true,
  imports: [],
  templateUrl: './get-product-by-category.component.html',
  styleUrl: './get-product-by-category.component.css'
})
export class GetProductByCategoryComponent {
  products: ProductCategory[] = [];
  categoryId: number =0;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      console.log(this.categoryId);

      this.loadProducts(this.categoryId);
    });
  }

  loadProducts(categoryId: number): void {
    this.categoryService.getProductsByCategory(categoryId).subscribe(products => {
      this.products = products;
      console.log(products);

    });
  }
}
