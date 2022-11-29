import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-btn',
  styleUrl: 'custom-btn.scss',
  shadow: true,
})
export class CustomBtn {
  @Prop() name: string = 'Hello';
  @Prop() disabled: boolean;
  @Prop() btnType: 'add' | 'delete';

  private getCssClassMap() {
    return this.isAddBtn() ? 'add-btn-color' : 'delete-btn-color';
  }

  private isAddBtn() {
    return this.btnType === 'add';
  }

  render() {
    return (
      <Host>
        <button class={`custom-button ${this.getCssClassMap()}`}>{this.name}</button>
      </Host>
    );
  }
}
