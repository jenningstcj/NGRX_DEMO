import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './Reducers/todo';

import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './Effects/todo';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {routing} from './app.routes';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoInputComponent } from './Components/todo-input/todo-input.component';

import { TodoComponent } from './Pages/todo/todo.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { TodoFilterComponent } from './Components/todo-filter/todo-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    EditCategoryComponent,
    TodoListComponent,
    TodoInputComponent,
    TodoComponent,
    CategoriesComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    StoreModule.provideStore({todo: todoReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(TodoEffects)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
