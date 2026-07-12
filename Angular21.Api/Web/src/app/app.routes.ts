import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('@dashboard/components/dashboard-component/dashboard-component') },
    { path: 'person/create', loadComponent: () => import('@dashboard/components/create-component/create-component') },
    { path: 'person/details/:personId', loadComponent: () => import('@dashboard/components/details-component/details-component') },
    { path: 'person/edit/:personId', loadComponent: () => import('@dashboard/components/edit-component/edit-component') },
];

