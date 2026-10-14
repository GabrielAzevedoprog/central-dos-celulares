import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../data/products';

interface ColorOption {
  id: string;
  label: string;
  swatch: string;
  image: string;
}

@Component({
  selector: 'app-featured',
  standalone: true,
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent implements OnInit, OnDestroy {
  product = PRODUCTS[0];

  colors: ColorOption[] = [
    { id: 'laranja', label: 'Laranja-cósmico', swatch: '#d97a30', image: 'assets/iphones/iphone-17-pro-max-laranja-cosmico.webp' },
    { id: 'azul', label: 'Azul-intenso', swatch: '#33415f', image: 'assets/iphones/iphone-17-pro-max-azul-intenso.webp' },
    { id: 'prata', label: 'Prateado', swatch: '#c7cbd1', image: 'assets/iphones/iphone-17-pro-max-prata.webp' },
  ];

  selectedColor = signal(this.colors[0]);
  imageVisible = signal(true);

  private autoplayMs = 3500;
  private timer?: ReturnType<typeof setInterval>;

  spec = computed(() =>
    this.product.spec.map((item) =>
      item.label === 'Cor' ? { ...item, value: this.selectedColor().label } : item
    )
  );

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.timer = setInterval(() => this.advance(), this.autoplayMs);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private advance(): void {
    const currentIndex = this.colors.findIndex((c) => c.id === this.selectedColor().id);
    const next = this.colors[(currentIndex + 1) % this.colors.length];
    this.swapTo(next);
  }

  private swapTo(c: ColorOption): void {
    this.imageVisible.set(false);
    setTimeout(() => {
      this.selectedColor.set(c);
      this.imageVisible.set(true);
    }, 220);
  }

  selectColor(c: ColorOption): void {
    if (c.id === this.selectedColor().id) return;
    this.stopAutoplay();
    this.swapTo(c);
    this.startAutoplay();
  }

  formatPrice(value: number): string {
    return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
