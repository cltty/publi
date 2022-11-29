import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import { Task } from '../../models/task';
import { lengthCheck, regexCheck } from '../../utils/utils';

@Component({
  tag: 'add-task',
  styleUrl: 'add-task.scss',
  shadow: true,
})
export class AddTask {
  @State() taskName: string;
  @Event() addTaskEventEmitter: EventEmitter<Task>;

  private handleInputChange(event) {
    this.taskName = event.target?.value;
  }

  private handleAdd() {
    this.addTaskEventEmitter.emit({
      name: this.taskName,
      date: new Date(),
    });
    this.taskName = '';
  }

  private isTaskClean() {
    return this.taskName && regexCheck(this.taskName) && lengthCheck(this.taskName);
  }

  private renderAddBtn() {
    return <custom-btn class="add-btn" name={'Add'} btnType={'add'} onClick={() => this.handleAdd()}></custom-btn>;
  }

  render() {
    return (
      <div class="add-container">
        <label htmlFor="add-task-input"></label>
        <input id="add-task-input" class="add-container__input-field" type="text" value={this.taskName} onInput={ev => this.handleInputChange(ev)} />
        {this.isTaskClean() ? this.renderAddBtn() : null}
      </div>
    );
  }
}
