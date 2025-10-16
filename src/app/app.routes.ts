import { Routes } from '@angular/router';
import { Characters } from '../pages/characters/characters';
import { CharacterDetail } from '../pages/character-detail/character-detail';

export const routes: Routes = [
  {
    path: 'characters',
    component: Characters,
  },
  {
    path: '',
    component: Characters,
  },
  {
    path: 'character/:id',
    component: CharacterDetail,
  },
];
