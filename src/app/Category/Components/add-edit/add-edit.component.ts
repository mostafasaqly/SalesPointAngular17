import { Component } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {
  category: Category = {} as Category;
  currentCategoryId: number| null = null;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Number() = +
    this.currentCategoryId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : null;
    if (this.currentCategoryId) {
      this.categoryService.GetCategoryById(this.currentCategoryId).subscribe(category => {
        this.category = category;
        console.log(category);

      });
    }
  }

  saveCategory(): void {
    if (this.currentCategoryId) {
      this.categoryService.UpdateCategory(this.currentCategoryId, this.category).subscribe((data) => {
        this.router.navigate(['/category']);
        console.log(data);

      });
    } else {
      this.categoryService.CreateCategory(this.category).subscribe((data) => {
        this.router.navigate(['/category']);
        console.log(data);

      });
    }
  }
}
