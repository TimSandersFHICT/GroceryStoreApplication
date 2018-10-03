import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './core/groceries/grocery-list.component';
import { AddFormComponent } from './core/form/add-form.component';
import { MainComponent } from './core/main.component';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    AddFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
