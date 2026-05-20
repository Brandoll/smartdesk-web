import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucideChevronLeft, LucideChevronRight } from '@lucide/angular';

@Component({
  selector: 'app-video-demo',
  standalone: true,
  imports: [CommonModule, LucideChevronLeft, LucideChevronRight],
  templateUrl: './video-demo.component.html',
})
export class VideoDemoComponent {
  videos: SafeResourceUrl[];
  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvHUnNG7694?rel=0&vq=hd720'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/_aEEaJikVDA?rel=0&vq=hd720'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/XuNLMeExlFQ?rel=0&vq=hd720')
    ];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }
}
