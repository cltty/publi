import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Task } from '../../models/task';

@Component({
  tag: 'task-row',
  styleUrl: 'task-row.scss',
  shadow: true,
})
export class TaskRow {
  @Prop() task: Task;
  @Prop() taskIndex: number;
  @Event() onDeleteEventEmitter: EventEmitter<number>;

  private onDelete() {
    this.onDeleteEventEmitter.emit(this.taskIndex);
  }

  render() {
    return (
      <div class="task-row">
        <span>{this.task.name}</span>
        <span>{this.task.date.toDateString()}</span>
        <span class="task-row__btn">
          <custom-btn name={'Delete'} btnType={'delete'} onClick={() => this.onDelete()}></custom-btn>
        </span>
      </div>
    );
  }
}
