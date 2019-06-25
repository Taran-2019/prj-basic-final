import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredientEvent =new EventEmitter<Ingredient>();
  @ViewChild('addname',{static:false}) localname:ElementRef;
  @ViewChild('addamount',{static:false}) localamount:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addIngredient()
  {
    const newIngredient=new Ingredient(this.localname.nativeElement.value,this.localamount.nativeElement.value);
    this.addIngredientEvent.emit(newIngredient);
  }
}
