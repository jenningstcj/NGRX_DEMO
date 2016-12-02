import {Routes, RouterModule} from '@angular/router';

import {CategoriesComponent, TodoComponent} from './Pages/index';


export const routes: Routes = [
  {path:'', component: TodoComponent},
  {path: 'edit-category', component: CategoriesComponent},
  {path: '**', component: TodoComponent}
];

export const routing = RouterModule.forRoot(routes);
