import { Component } from '@angular/core';
import { LucideCpu, LucideAlertTriangle, LucideNetwork, LucideBarChart2 } from '@lucide/angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [LucideCpu, LucideAlertTriangle, LucideNetwork, LucideBarChart2],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
}
