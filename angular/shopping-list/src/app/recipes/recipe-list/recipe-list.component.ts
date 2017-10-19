import { Component, OnInit } from '@angular/core';

import {  Recipe  } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A test recipe', ' this is still just a test', 'http://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/65/63/fotolia_4098846_XS.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
