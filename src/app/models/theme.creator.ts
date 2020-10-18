import { DarkTheme, LightTheme, RedTheme, Theme } from './theme.model';

export abstract class ThemeCreator {
  public abstract factoryMethod(): Theme;
}

export class DarkThemeCreator extends ThemeCreator {
  public factoryMethod(): Theme {
    return new DarkTheme();
  }
}

export class LightThemeCreator extends ThemeCreator {
  public factoryMethod(): Theme {
    return new LightTheme();
  }
}

export class RedThemeCreator extends ThemeCreator {
  public factoryMethod(): Theme {
    return new RedTheme();
  }
}
