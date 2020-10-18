import { DarkThemeCreator, LightThemeCreator, RedThemeCreator, ThemeCreator } from './theme.creator';
import { Theme } from './theme.model';

export function addAvailableThemesToList(): Theme[] {
  return [
    clientCode(new DarkThemeCreator()),
    clientCode(new LightThemeCreator()),
    clientCode(new RedThemeCreator())
  ];
}

function clientCode(creator: ThemeCreator): Theme {
  return creator.factoryMethod();
}
