import { Component } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Service/category.service';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [TableModule,ButtonModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.GetAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  editCategory(id: number): void {
    this.router.navigate(['category/edit', id]);
  }

  deleteCategory(id: number): void {
    if (confirm('Are you sure to delete this category?')) {
      this.categoryService.DeleteCategory(id).subscribe((d) => {
        this.fetchCategories(); // Refresh the list
        console.log(d);

      });
    }
  }
}
