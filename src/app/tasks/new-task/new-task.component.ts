import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required:true}) UserId !:string
@Output() cancel = new EventEmitter();
@Output() add =new EventEmitter<NewTaskData>();
title='';
summary='';
date='';
tasksService= inject(TasksService);
  closeOpenedNewTask(){
this.cancel.emit();
  }
  OnSubmit(){
this.tasksService.addTask({
  title: this.title,
  summary :this.summary,
  date : this.date
},this.UserId);
this.cancel.emit();

  }
  
}
