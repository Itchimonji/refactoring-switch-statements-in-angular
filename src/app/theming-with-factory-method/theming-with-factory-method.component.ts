import { Component, OnInit } from '@angular/core';
import {Theme} from '../models/theme.model';
import {DarkThemeCreator, LightThemeCreator, RedThemeCreator, ThemeCreator} from '../models/theme.creator';
import {addAvailableThemesToList} from '../models/theme.facade';

@Component({
  selector: 'app-theming-with-factory-method',
  templateUrl: './theming-with-factory-method.component.html',
  styleUrls: ['./theming-with-factory-method.component.scss']
})
export class ThemingWithFactoryMethodComponent implements OnInit {

  public selectedTheme: Theme;
  public themes: Theme[];

  constructor() {
    this.themes = new Array<Theme>();
  }

  ngOnInit(): void {
    this.themes = addAvailableThemesToList();
  }

  public selectionChanged(): void {
    // read abstract class
    console.log('changed theme to ' + this.selectedTheme.name);
  }

  public trackByFn(index, item: Theme): string {
    return item.name;
  }
}
