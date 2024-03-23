import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  todoValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.todoValue) {
      const item: Todo = {
        id: Date.now(),
        value: this.todoValue,
        selected: false
      }
      this.todoList.push(item);

      this.todoValue = '';
    }
  }

  removeItem(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

}
