import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';
import {BooksListComponent} from '/.books/books-list/books-list.component';
import {BookComponent} from './books/books-list/book/book.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent,BooksComponent,BookComponent,BooksListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
