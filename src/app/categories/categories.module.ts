import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from "./categories.component";
import {CategoryComponent} from "./category/category.component";


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  exports: [
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
