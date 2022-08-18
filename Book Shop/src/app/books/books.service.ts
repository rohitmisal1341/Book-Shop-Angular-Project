import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:"Computor fundamental and COding",
    src:"https://images-na.ssl-images-amazon.com/images/I/61hB9zepRbL._SY498_BO1,204,203,200_.jpg",
    author:"PAragonn books",
    amount:700
      },
      {
        name:"java programming",
        src:"https://images-na.ssl-images-amazon.com/images/I/51z+MsmqesL._SX377_BO1,204,203,200_.jpg",
        author:" R. Nageswara Rao",
        amount:800
      },
      {
        name:"Hands-on Go Programming: Learn Google’s Golang Programming, Data Structures, Error Handling",
        src:"https://images-na.ssl-images-amazon.com/images/I/51o9KtaXVPL._SX404_BO1,204,203,200_.jpg",
        author:" Sachchidanand Singh Prithvipal Singh",
        amount:571
      },{
        name:"The C Programming Language | Second Edition",
        src:"https://images-na.ssl-images-amazon.com/images/I/41NFtdgGMtL._SX361_BO1,204,203,200_.jpg",
        author:"Brian W. Kernighan / Dennis Ritchie ",
        amount:1000
      },{
        name:".NET 4.5 Programming 6-in-1",
        src:"https://images-na.ssl-images-amazon.com/images/I/51qFzcqP7lL._SX381_BO1,204,203,200_.jpg",
        author:"Kogent Learning Solutions",
        amount:690
      },
    ]
  }
}
