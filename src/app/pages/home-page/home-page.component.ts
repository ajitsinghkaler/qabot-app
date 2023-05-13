import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoComponent } from 'src/app/components/demo/demo.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
// import { FeaturesComponent } from 'src/app/components/features/features.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';
import { ChatPageComponent } from '../chat-page/chat-page.component';

@Component({
  selector: 'qabot-app-home-page',
  standalone: true,
  template: `
    <qabot-app-chat-page />
    <qabot-app-jumbotron />
    <qabot-app-demo />
    <qabot-app-faq class="py-20" />
    <qabot-app-testimonial />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JumbotronComponent,
    DemoComponent,
    FaqComponent,
    TestimonialComponent,
    ChatPageComponent,
  ],
})
export class HomePageComponent {}
