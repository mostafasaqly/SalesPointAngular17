import { Routes } from '@angular/router';
import { LayoutCategoryComponent } from './Category/Components/layout-category/layout-category.component';
import { CategoryListComponent } from './Category/Components/category-list/category-list.component';
import { AddEditComponent } from './Category/Components/add-edit/add-edit.component';
import { GetProductByCategoryComponent } from './Category/Components/get-product-by-category/get-product-by-category.component';
import { GetAllProductsComponent } from './Product/Components/get-all-products/get-all-products.component';

export const routes: Routes = [

  {
    path: 'products', component: GetAllProductsComponent, title: 'get all products'
  },
  {
    path: 'category',
    component: LayoutCategoryComponent,
    title: 'category',
    children: [
      {path: 'list', component: CategoryListComponent, title: 'Category List'},
      {path: 'add', component: AddEditComponent, title: 'Category Add Edit'}, // add
      {path: 'edit/:id', component: AddEditComponent, title: 'Category Add Edit'},
      {path: 'productbycategory/:id', component: GetProductByCategoryComponent, title: 'get product by category'},

    ]
  }
];
