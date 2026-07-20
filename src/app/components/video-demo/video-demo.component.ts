import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
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

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLIFrameElement>>;

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WvHUnNG7694?rel=0&vq=hd720&enablejsapi=1'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/_aEEaJikVDA?rel=0&vq=hd720&enablejsapi=1'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/XuNLMeExlFQ?rel=0&vq=hd720&enablejsapi=1')
    ];
  }

  pauseAllVideos() {
    this.videoPlayers.forEach(player => {
      if (player.nativeElement && player.nativeElement.contentWindow) {
        player.nativeElement.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  }

  next() {
    this.pauseAllVideos();
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }

  prev() {
    this.pauseAllVideos();
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }

  goToSlide(index: number) {
    this.pauseAllVideos();
    this.currentIndex = index;
  }
}
