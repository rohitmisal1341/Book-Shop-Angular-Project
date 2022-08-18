import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../TypesInterface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book ={} as Book;

  isLogged:boolean =true;
  isInCart:boolean = false;
  constructor(private cartService:CartService) { }

  
  ngOnInit(): void {
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
   
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
