import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideChevronDown } from '@lucide/angular';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, LucideChevronDown],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
