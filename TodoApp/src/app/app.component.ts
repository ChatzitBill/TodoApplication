import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TodoApp';
  todos: Todo[] = [];
  newTodo: string = '';
  apiUrl = 'http://localhost:5135/api/TodoItems'; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http.get<Todo[]>(this.apiUrl + '?_limit=5').subscribe(data => {
      this.todos = data;
    });
  }

  addTodo() {
    if (!this.newTodo.trim()) return;
    const newTask: Todo = { id: Date.now(), name: this.newTodo, isCompleted: false };
    this.http.post<Todo>(this.apiUrl, newTask).subscribe(todo => {
      this.todos.push(todo);
      this.newTodo = '';
    });
  }

  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.http.patch(`${this.apiUrl}/${todo.id}`, { isCompleted: todo.isCompleted }).subscribe();
  }

  deleteTodo(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}



