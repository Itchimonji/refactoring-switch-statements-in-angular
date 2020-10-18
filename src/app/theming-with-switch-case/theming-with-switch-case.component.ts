import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theming-with-switch-case',
  templateUrl: './theming-with-switch-case.component.html',
  styleUrls: ['./theming-with-switch-case.component.scss']
})
export class ThemingWithSwitchCaseComponent {

  public selectedTheme: string;

  constructor() {
    this.selectedTheme = 'dark';
  }

  public selectionChanged(): void {
    switch (this.selectedTheme) {
      case 'dark':
        console.log('changed theme to dark');
        // do something more with the theme
        break;
      case 'light':
        console.log('changed theme to light');
        // do something more with the theme
        break;
      case 'red':
        console.log('changed theme to red');
        // do something more with the theme
        break;
      case 'green':
        console.log('changed theme to green');
        // do something more with the theme
        break;
      default:
        console.log('What ever..');
    }
  }

}
