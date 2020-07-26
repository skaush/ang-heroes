import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
}) //metadata properties for this component 

export class TasksComponent implements OnInit {

  tasks = TASKS; // This is our data, coming from the mock
  selectedTask: Task; 

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  constructor() { };

  // a lifecycle hook - called shortly after creating the component
  // put initialization logic here
  ngOnInit(): void {
  }

}
