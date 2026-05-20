import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrustComponent } from './components/trust/trust.component';
import { VideoDemoComponent } from './components/video-demo/video-demo.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    TrustComponent,
    VideoDemoComponent,
    MetricsComponent,
    BenefitsComponent,
    FeaturesComponent,
    HowItWorksComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'smartdesk-web';
}
