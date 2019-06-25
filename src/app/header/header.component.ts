import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() optionselected=new EventEmitter<string>();//listen to this event from the parent(app) component
  onselect(option:string){
   this.optionselected.emit(option); 
  }

}
