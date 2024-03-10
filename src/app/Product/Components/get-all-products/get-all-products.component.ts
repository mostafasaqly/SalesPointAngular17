import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Model/iproduct';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-get-all-products',
  standalone: true,
  imports: [MatTableModule, CommonModule,
    MatButtonModule,MatCardModule, MatPaginatorModule],
  templateUrl: './get-all-products.component.html',
  styleUrl: './get-all-products.component.css'
})
export class GetAllProductsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Title', 'Price', 'Category Name', 'Image'];

  ProductList: IProduct[] = [];
  dataSource = this.ProductList;
constructor(private productService: ProductService)
{

}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next : (data) => {
        this.ProductList = data;
        this.dataSource = this.ProductList;
      }
    })
  }


}
