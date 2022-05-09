import { Component, OnInit } from '@angular/core';
import {Category} from './model/category.model';
import {CategoryItemModel} from "./model/categoryItem.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  activeCategory:number = 0;

  public categories: Category[] = [
    {
      id: 0,
      title: 'Овощи',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/warzywa-white-ico.png?121'
    },
    {
      id: 1,
      title: 'Фрукты',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/owoce-white-ico.png?121'
    },
    {
      id: 2,
      title: 'Картошка',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/ziemniaki-white-ico.png?121'
    },
    {
      id: 3,
      title: 'Грибы',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/grzyby-white-ico.png?121'
    },
    {
      id: 4,
      title: 'Зерновые злаки',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/zbo-a-white-ico.png?121'
    },
    {
      id: 5,
      title: 'Маслиничные культуры',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/ro-liny-oleiste-white-ico.png?121'
    },
    {
      id: 6,
      title: 'Специи',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/zio-a-white-ico.png?121'
    }
  ];

  public categoriesItems:CategoryItemModel[] = [
    {
      categoryId: 0,
      id: 0,
      title: 'Овощ1'
    },
    {
      categoryId: 0,
      id: 1,
      title: 'Овощ2'
    },
    {
      categoryId: 0,
      id: 2,
      title: 'Овощ3'
    },
    {
      categoryId: 1,
      id: 0,
      title: 'Фрукт1'
    },
    {
      categoryId: 1,
      id: 1,
      title: 'Фрукт2'
    },
    {
      categoryId: 1,
      id: 2,
      title: 'Фрукт3'
    },
    {
      categoryId: 1,
      id: 3,
      title: 'Фрукт4'
    },
    {
      categoryId: 2,
      id: 0,
      title: 'Картошка1'
    },
    {
      categoryId: 2,
      id: 1,
      title: 'Картошка2'
    },
    {
      categoryId: 3,
      id: 0,
      title: 'Гриб1'
    },
    {
      categoryId: 3,
      id: 1,
      title: 'Гриб2'
    },
    {
      categoryId: 3,
      id: 2,
      title: 'Гриб3'
    },
    {
      categoryId: 4,
      id: 0,
      title: 'Зерновые злаки1'
    },
    {
      categoryId: 4,
      id: 1,
      title: 'Зерновые злаки2'
    },
    {
      categoryId: 4,
      id: 2,
      title: 'Зерновые злаки3'
    },
    {
      categoryId: 5,
      id: 0,
      title: 'Маслиничные культуры1'
    },
    {
      categoryId: 5,
      id: 1,
      title: 'Маслиничные культуры2'
    },
    {
      categoryId: 5,
      id: 2,
      title: 'Маслиничные культуры3'
    },
    {
      categoryId: 6,
      id: 0,
      title: 'Специи1'
    },
    {
      categoryId: 6,
      id: 1,
      title: 'Специи2'
    },
    {
      categoryId: 6,
      id: 2,
      title: 'Специи3'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCategoryList(id:number | string) {
    console.log(this.categoriesItems.filter(item => item.categoryId === id));
  }
}
