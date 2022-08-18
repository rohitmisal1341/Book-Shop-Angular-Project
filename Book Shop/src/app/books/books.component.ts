import { Component, OnInit } from '@angular/core';
import { Book } from '../TypesInterface/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  constructor(private booksService:BooksService) { }
  
  books:Book[]=[] ;

   isShow:boolean =true;

  ngOnInit(): void {

    this.books = this.booksService.getBooks();
  }  

}
