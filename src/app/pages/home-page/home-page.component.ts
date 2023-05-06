import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoComponent } from 'src/app/components/demo/demo.component';
import { FeaturesComponent } from 'src/app/components/features/features.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';

@Component({
  selector: 'qabot-app-home-page',
  standalone: true,
  imports: [
    JumbotronComponent,
    DemoComponent,
    FeaturesComponent,
    TestimonialComponent,
  ],
  template: `
    <qabot-app-jumbotron></qabot-app-jumbotron>
    <qabot-app-demo></qabot-app-demo>
    <qabot-app-features></qabot-app-features>
    <qabot-app-testimonial></qabot-app-testimonial>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
