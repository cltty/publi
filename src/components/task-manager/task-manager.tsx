import { Component, h, Listen, State } from '@stencil/core';
import { Task } from '../../models/task';

@Component({
  tag: 'task-manager',
  styleUrl: 'task-manager.scss',
  shadow: true,
})
export class TaskManager {
  @State() tasks: Task[] = [];

  @Listen('addTaskEventEmitter')
  handleAddTask(event: CustomEvent<Task>) {
    this.tasks = [event.detail, ...this.tasks];
  }

  @Listen('onDeleteEventEmitter')
  handleDeleteTask(event: CustomEvent<number>) {
    let splicedArray = [...this.tasks];
    splicedArray.splice(event.detail, 1);
    this.tasks = splicedArray;
  }

  private renderTasks() {
    return (
      <div class="tasks-container">
        {this.tasks.map((task, index) => (
          <task-row class="tasks-container__task" task={task} taskIndex={index}></task-row>
        ))}
      </div>
    );
  }
  private renderNoContent() {
    return (
      <div class="no-content-container">
        <h3> No tasks yet </h3>
        <p> Make sure that your task name contains "component" word and has a length of minimum 3 and maximum 50 characters. </p>
      </div>
    );
  }

  render() {
    return (
      <div class="task-manager">
        <add-task></add-task>
        {this.tasks.length ? this.renderTasks() : this.renderNoContent()}
      </div>
    );
  }
}
