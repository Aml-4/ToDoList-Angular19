import { Component, computed, EventEmitter, Input ,input, output, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone:false,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// avatar=input.required<string>(); // input singnal an alternative for @Input Decorator
// id=input.required<string>();
// name=input.required<string>();
//_imagePath=computed(()=>{   return 'assets/users/'+this.avatar }) // we use the computed function with with signal inputs
//select = output<string>(); // this ouptput function doesn't create signal, unlike input fucntion that create an input signal
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;

// @Input({required:true}) user !: {
// id:string,
// avatar:string,
// name:string
// };

@Input({required:true}) user !: User;
@Input({required:true}) selected !: boolean;

@Output() select =new EventEmitter<string>();// new EventEmitter()
get imagePath(){
  return 'assets/users/'+this.user.avatar;
}

OnSelectUser(){
this.select.emit(this.user.id)
}
}
