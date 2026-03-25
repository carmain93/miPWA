import { Routes } from '@angular/router';
import { Nosotros } from './pages/nosotros/nosotros';
import { Index } from './pages/index';
import { Juego } from './pages/juego/juego';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'nosotros', component: Nosotros },
  { path: 'juego', component: Juego }
];
