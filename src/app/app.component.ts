import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone:false,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maximalianProject';
  users = DUMMY_USERS
  selectedUserId ?:string;
  SelectedName =signal('');
  OnSelectUser(id:string){
console.log('The Selected User Id Is', id)
this.selectedUserId=id;
this.SelectedName.set(this.users.find(user => user.id == id)?.name!);
  }

  get selectedUser (){

    return this.users.find(user => user.id == this.selectedUserId)
  }

}

