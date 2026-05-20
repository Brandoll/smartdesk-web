import { Component } from '@angular/core';
import { LucideCheck } from '@lucide/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [LucideCheck, CommonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  isAnnual = false;

  toggleBilling() {
    this.isAnnual = !this.isAnnual;
  }
}
