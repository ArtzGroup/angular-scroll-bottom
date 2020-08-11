import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo, TodoService } from './todos.service';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive'

@Component({
  providers: [TodoService],
  selector: 'my-app',
  template: `
    <div class="my-list" #scrollMe [scrollTop]="scrollMe.scrollHeight">
      <ul>
        <li *ngFor="let todo of todos">
          {{todo.description}}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
    :host {
      font-size: 2em;
    }

    .my-list {
      height: 300px;
      overflow: auto;
    }
    `
  ]
})
export class AppComponent implements OnInit {
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;

  todos: ITodo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodos()
      .then((tds) => this.todos = tds);
  }
}
