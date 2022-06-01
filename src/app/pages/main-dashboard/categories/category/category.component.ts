import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Category } from '../interfaces/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input() public category: Category;
}
