import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {


  }


  //This models state 
  products:Product[] =[

    {
   
      id:1,
      title:'Shirt',
      unitPrice:10.99,
      qty:0,
      extendedPrice:0
    },

    {
   
      id:2,
      title:'Pants',
      unitPrice:20.99,
      qty:0,
      extendedPrice:0
    },

    {
   
      id:3,
      title:'Shoes',
      unitPrice:40.99,
      qty:0,
      extendedPrice:0
    }


  ]

  increaseQty(newProduct:Product)
  {
    const foundIndex = this.products.findIndex((product)=> newProduct.id === product.id )

    this.products[foundIndex] = newProduct;

  }
  
  decreaseQty(newProduct:Product)
  {

    const foundIndex = this.products.findIndex((product)=> newProduct.id === product.id )

    this.products[foundIndex] = newProduct;
  }
}
