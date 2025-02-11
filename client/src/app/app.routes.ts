import { Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { ImportDataComponent } from './container/import-data/import-data.component';
import { LoginComponent } from './container/login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'import-data',
      },
      {
        path: 'import-data',
        component: ImportDataComponent,
      },
      {
        path: 'me',
        component: ImportDataComponent,
      },
    ],
  },
];
