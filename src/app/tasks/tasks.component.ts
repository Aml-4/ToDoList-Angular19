import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
  //imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
@Input({required:true}) UserId !:string;
@Input({required:true}) SelectedUserName ?:string;
isAddingTask :boolean=false;

constructor(private tasksServie:TasksService) {

}

get selectedUserTasks(){
return this.tasksServie.getTaskForUser(this.UserId);
}


AddNewTask(){
this.isAddingTask=true;
}

onCancelAddTask(){
this.isAddingTask=false;
}


}
