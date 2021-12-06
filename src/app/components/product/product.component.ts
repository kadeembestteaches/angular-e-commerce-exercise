import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product:Product={
    id: 0,
    title: "",
    unitPrice: 0,
    extendedPrice: 0,
    qty: 0
  };

  @Output() newProduct = new EventEmitter<Product>();
  @Output() newProduct2 = new EventEmitter<Product>();


  onDecreaseQty()
  {

    const newQuantity = this.product.qty-1;


    if(newQuantity>=0)
    {
      const newExtendPrice = newQuantity  * this.product.unitPrice;
      const newProduct = {...this.product,qty:newQuantity, extendedPrice:newExtendPrice};


      this.newProduct2.emit(newProduct);
    }
    
  }


  onIncreaseQty()
  {

      const newQuantity = this.product.qty+1;
      const newExtendPrice = newQuantity  * this.product.unitPrice;
      const newProduct = {...this.product,qty:newQuantity, extendedPrice:newExtendPrice};


      this.newProduct.emit(newProduct);
  }

}
