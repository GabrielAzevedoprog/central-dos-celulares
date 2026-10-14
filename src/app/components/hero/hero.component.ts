import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('showcase') showcaseRef?: ElementRef<HTMLElement>;
  showcaseInView = signal(false);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.showcaseRef?.nativeElement;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.showcaseInView.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.showcaseInView.set(true);
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
