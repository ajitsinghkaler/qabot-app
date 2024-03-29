import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoComponent } from 'src/app/components/demo/demo.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HeaderLogoutComponent } from 'src/app/components/header-logout/header-logout.component';
// import { FeaturesComponent } from 'src/app/components/features/features.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';

@Component({
  selector: 'qabot-app-home-page',
  standalone: true,
  template: `
  <qabot-app-header-logout />
    <qabot-app-jumbotron />
    <qabot-app-demo />
    <qabot-app-testimonial/>
    <qabot-app-faq class="py-20 bg-gray-50" />
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
    HeaderLogoutComponent,
    JumbotronComponent,
    DemoComponent,
    FaqComponent,
    TestimonialComponent,
  ],
})
export class HomePageComponent {}
