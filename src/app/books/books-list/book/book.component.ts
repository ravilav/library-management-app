
import { Component } from '@angular/core';
import { Recipe } from '../book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
       books: Book[]=[
         new Book('100 dresses','Eleanor Estes'),
         new Book('A letter to god','Gregorio Lopez')
       ];
}