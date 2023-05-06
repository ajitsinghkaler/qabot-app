import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  } from '@angular/common';

@Component({
  selector: 'qabot-app-chatbot-list',
  standalone: true,
  imports: [],
  template: `<p>chatbot-list works!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotListComponent {}
