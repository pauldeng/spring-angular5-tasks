import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/task-add/tasks-add.component';
import { TasksListComponent } from './tasks/task-list/tasks-list.component';
import {TaskService} from "./tasks/task.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [TaskService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
