import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  template: `
  <div class="footer">
    <div class="complete-all">
      <input class="custom-checkbox" type="checkbox" id="ck-complete-all" 
      (change)="checkAll.emit($event.target.checked)">
      <label for="ck-complete-all">Mark all as complete</label>
    </div>
    <div class="clear-completed">
      <button class="btn" (click)="clearChecked.emit();">Clear completed
      (<span class="completed-todos">{{ Completed }}</span>)
      </button>
      <strong class="active-todos"> {{ Active }}</strong> items left
    </div>
  </div>
  `,
  styles: [`
  
.footer {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.complete-all, .clear-completed {
  position: relative;
  flex-basis: 50%;
}

.clear-completed {
  text-align: right;
  padding-right: 15px;
}

.btn {
  padding: 1px 5px;
  font-size: .8em;
  line-height: 1.5;
  border-radius: 3px;
  outline: none;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: pointer;
}

.btn:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
`]
})
export class TodoFooterComponent {
  @Input() Completed: number;
  @Input() Active: number;

  @Output() checkAll = new EventEmitter();
  @Output() clearChecked = new EventEmitter();
}
