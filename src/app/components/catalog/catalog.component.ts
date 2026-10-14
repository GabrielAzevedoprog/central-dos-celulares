import { Component, signal } from '@angular/core';
import { APPLE_PRODUCTS, SEMINOVOS, XIAOMI_PRODUCTS, SAMSUNG_PRODUCTS, ACESSORIOS, AndroidProduct } from '../../data/products';

type TabKey = 'Apple' | 'Samsung' | 'Xiaomi' | 'Seminovos' | 'Acessórios';

@Component({
  selector: 'app-catalog',
  standalone: true,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  tabs: TabKey[] = ['Apple', 'Samsung', 'Xiaomi', 'Seminovos', 'Acessórios'];
  active = signal<TabKey>('Apple');

  apple = APPLE_PRODUCTS;
  samsung = SAMSUNG_PRODUCTS;
  xiaomi = XIAOMI_PRODUCTS;
  seminovos = SEMINOVOS;
  acessorios = ACESSORIOS;

  setTab(t: TabKey) {
    this.active.set(t);
  }

  formatPrice(value: number): string {
    return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  formatAndroidLine(p: AndroidProduct): string {
    const parts = [p.storage];
    if (p.color) parts.push(p.color);
    if (p.ram) parts.push(p.ram + ' RAM');
    parts.push('Lacrado');
    return parts.join(' · ');
  }
}
