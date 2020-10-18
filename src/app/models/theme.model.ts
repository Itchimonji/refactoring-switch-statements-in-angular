export interface Theme {
  name: string;
  getStylename(): string;
  getFontname(): string;
}

export class DarkTheme implements Theme {
  public name = 'dark';

  public getStylename(): string {
    return this.name;
  }

  public getFontname(): string {
    return 'Arial';
  }
}

export class LightTheme implements Theme {
  public name = 'light';

  public getStylename(): string {
    return this.name;
  }

  public getFontname(): string {
    return 'Comic Sans MS';
  }
}

export class RedTheme implements Theme {
  public name = 'red';

  public getStylename(): string {
    return this.name;
  }

  public getFontname(): string {
    return 'Times New Roman';
  }
}
