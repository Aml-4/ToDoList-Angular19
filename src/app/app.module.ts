import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from './user/user.component';
import { BrowserModule } from "@angular/platform-browser";
//import { CardComponent } from "./shared/card/card.component";
//import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
declarations:[
    AppComponent,
    HeaderComponent,
   // TaskComponent,
   // TasksComponent,
    UserComponent
   // CardComponent,
   // NewTaskComponent
], // for non-standalone components
bootstrap:[AppComponent],
imports:[BrowserModule,SharedModule,TasksModule] // for standalone components and other modules 
// ,DatePipe is not needed to be added here in the imports array because it is part of Browser module
})
export class AppModule {}