// ---------- Apple (lacrados / novos) ----------
export interface AppleProduct {
  id: string;
  name: string;
  color: string;
  storage: string;
  price: number;
  installment: string;
  image: string;
  tag?: 'Lançamento' | 'Mais vendido' | 'Custo-benefício';
  spec: { label: string; value: string }[];
}

export const APPLE_PRODUCTS: AppleProduct[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    color: 'Laranja',
    storage: '256GB',
    price: 7599.99,
    installment: '12x de R$ 722,00',
    tag: 'Lançamento',
    image: 'assets/iphones/iphone-17-pro-max-laranja.webp',
    spec: [
      { label: 'Cor', value: 'Laranja' },
      { label: 'Armazenamento', value: '256GB' },
      { label: 'Condição', value: 'Lacrado' },
    ],
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    color: 'Prateado',
    storage: '256GB',
    price: 7199.99,
    installment: '12x de R$ 684,00',
    tag: 'Lançamento',
    image: 'assets/iphones/iphone-17-pro-prata.webp',
    spec: [
      { label: 'Cor', value: 'Prateado' },
      { label: 'Armazenamento', value: '256GB' },
      { label: 'Condição', value: 'Lacrado' },
    ],
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    color: 'Lavanda',
    storage: '256GB',
    price: 5199.99,
    installment: '12x de R$ 494,00',
    tag: 'Mais vendido',
    image: 'assets/iphones/iphone-17-lavanda.webp',
    spec: [
      { label: 'Cor', value: 'Lavanda' },
      { label: 'Armazenamento', value: '256GB' },
      { label: 'Condição', value: 'Lacrado' },
    ],
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    color: 'Ultramarino',
    storage: '128GB',
    price: 4599.99,
    installment: '12x de R$ 439,00',
    tag: 'Custo-benefício',
    image: 'assets/iphones/iphone-16-ultramarinho.webp',
    spec: [
      { label: 'Cor', value: 'Ultramarino' },
      { label: 'Armazenamento', value: '128GB' },
      { label: 'Condição', value: 'Lacrado' },
    ],
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    color: 'Preto',
    storage: '128GB',
    price: 4099.99,
    installment: '12x de R$ 391,00',
    image: 'assets/iphones/iphone-15-preto.webp',
    spec: [
      { label: 'Cor', value: 'Preto' },
      { label: 'Armazenamento', value: '128GB' },
      { label: 'Condição', value: 'Lacrado' },
    ],
  },
];

// backwards-compat alias (hero/featured sections showcase the Apple lineup)
export const PRODUCTS = APPLE_PRODUCTS;

// ---------- Seminovos (iPhones usados, com saúde da bateria) ----------
export interface UsedProduct {
  id: string;
  name: string;
  storage: string;
  batteryHealth: string;
  price: number;
  installment: string;
  image?: string;
}

export const SEMINOVOS: UsedProduct[] = [
  { id: 'sem-11-64', name: 'iPhone 11', storage: '64GB', batteryHealth: 'Acima de 80%', price: 999, installment: '12x de R$ 94,91', image: 'assets/seminovos/iphone-11-branco.webp' },
  { id: 'sem-12-64', name: 'iPhone 12', storage: '64GB', batteryHealth: 'Acima de 80%', price: 1299, installment: '12x de R$ 123,41', image: 'assets/seminovos/iphone-12-roxo.webp' },
  { id: 'sem-12-128', name: 'iPhone 12', storage: '128GB', batteryHealth: '80%', price: 1699, installment: '12x de R$ 161,41', image: 'assets/seminovos/iphone-12-vermelho.webp' },
  { id: 'sem-12pro-128', name: 'iPhone 12 Pro', storage: '128GB', batteryHealth: 'Acima de 80%', price: 2100, installment: '12x de R$ 199,50', image: 'assets/seminovos/iphone-12-pro-azul-pacifico.webp' },
  { id: 'sem-12promax-128', name: 'iPhone 12 Pro Max', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2599, installment: '12x de R$ 246,91', image: 'assets/seminovos/iphone-12-pro-max-dourado.webp' },
  { id: 'sem-13-128', name: 'iPhone 13', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2099, installment: '12x de R$ 199,41', image: 'assets/seminovos/iphone-13-verde.webp' },
  { id: 'sem-13pro-128', name: 'iPhone 13 Pro', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2699, installment: '12x de R$ 256,41', image: 'assets/seminovos/iphone-13-pro-grafite.webp' },
  { id: 'sem-13promax-128', name: 'iPhone 13 Pro Max', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2899, installment: '12x de R$ 275,41', image: 'assets/seminovos/iphone-13-pro-max-azul.webp' },
  { id: 'sem-14promax-128', name: 'iPhone 14 Pro Max', storage: '128GB', batteryHealth: 'Acima de 85%', price: 3599, installment: '12x de R$ 341,91', image: 'assets/seminovos/iphone-14-pro-max-amarelo.webp' },
  { id: 'sem-14plus-128', name: 'iPhone 14 Plus', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2499, installment: '12x de R$ 237,41', image: 'assets/seminovos/iphone-14-vermelho.webp' },
  { id: 'sem-14-128', name: 'iPhone 14', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2299, installment: '12x de R$ 218,41', image: 'assets/seminovos/iphone-14-roxo.webp' },
  { id: 'sem-15-128', name: 'iPhone 15', storage: '128GB', batteryHealth: 'Acima de 85%', price: 2999, installment: '12x de R$ 284,91', image: 'assets/seminovos/iphone-15-rosa.webp' },
  { id: 'sem-15plus-128', name: 'iPhone 15 Plus', storage: '128GB', batteryHealth: 'Acima de 85%', price: 3199, installment: '12x de R$ 303,91', image: 'assets/seminovos/iphone-15-plus-verde.webp' },
  { id: 'sem-15pro-128', name: 'iPhone 15 Pro', storage: '128GB', batteryHealth: 'Acima de 85%', price: 3500, installment: '12x de R$ 332,50', image: 'assets/seminovos/iphone-15-pro-titanio-azul.webp' },
  { id: 'sem-15promax-256', name: 'iPhone 15 Pro Max', storage: '256GB', batteryHealth: 'Acima de 85%', price: 4000, installment: '12x de R$ 380,00', image: 'assets/seminovos/iphone-15-pro-max-titanio-branco.webp' },
  { id: 'sem-16-128', name: 'iPhone 16', storage: '128GB', batteryHealth: '90%', price: 4000, installment: '12x de R$ 380,00', image: 'assets/seminovos/iphone-16-ultramarino.webp' },
  { id: 'sem-16pro-128', name: 'iPhone 16 Pro', storage: '128GB', batteryHealth: 'Acima de 90%', price: 4700, installment: '12x de R$ 446,50', image: 'assets/seminovos/iphone-16-pro-titanio-desert.webp' },
  { id: 'sem-16promax-256', name: 'iPhone 16 Pro Max', storage: '256GB', batteryHealth: 'Acima de 90%', price: 5300, installment: '12x de R$ 503,50', image: 'assets/seminovos/iphone-16-pro-max-titanio-preto.webp' },
  { id: 'sem-17promax-256', name: 'iPhone 17 Pro Max', storage: '256GB', batteryHealth: '100%', price: 7200, installment: '12x de R$ 684,00', image: 'assets/iphones/iphone-17-pro-max-laranja.webp' },
];

// ---------- Xiaomi / POCO / Realme (lacrados) ----------
export interface AndroidProduct {
  id: string;
  name: string;
  brand: string;
  storage: string;
  ram?: string;
  color?: string;
  price: number;
  installment: string;
  note?: string;
  image?: string;
}

export const XIAOMI_PRODUCTS: AndroidProduct[] = [
  { id: 'xi-redmi15c', name: 'Redmi 15C', brand: 'Xiaomi', storage: '256GB', ram: '8GB', price: 1150, installment: '12x de R$ 109,00', image: 'assets/xiaomi/redmi-15c.webp' },
  { id: 'xi-redmi15', name: 'Redmi 15', brand: 'Xiaomi', storage: '256GB', ram: '8GB', price: 1299.99, installment: '12x de R$ 123,00', image: 'assets/xiaomi/redmi-15.webp' },
  { id: 'xi-redminote15', name: 'Redmi Note 15', brand: 'Xiaomi', storage: '256GB', ram: '8GB', price: 1400, installment: '12x de R$ 133,00', image: 'assets/xiaomi/redmi-note-15.webp' },
  { id: 'xi-pococ71', name: 'POCO C71', brand: 'POCO', storage: '128GB', ram: '4GB', price: 950, installment: '12x de R$ 90,00', image: 'assets/xiaomi/poco-c71.webp' },
  { id: 'xi-pococ85', name: 'POCO C85', brand: 'POCO', storage: '256GB', ram: '8GB', price: 1150, installment: '12x de R$ 109,00', image: 'assets/xiaomi/poco-c85.webp' },
  { id: 'xi-pocox8pro', name: 'POCO X8 Pro 5G', brand: 'POCO', storage: '512GB', ram: '12GB', price: 2750, installment: '12x de R$ 261,00', note: 'NFC', image: 'assets/xiaomi/poco-x8-pro.webp' },
  { id: 'xi-redminote15pro', name: 'Redmi Note 15 Pro', brand: 'Xiaomi', storage: '256GB', ram: '8GB', price: 2100, installment: '12x de R$ 199,99', image: 'assets/xiaomi/redmi-note-15-pro.webp' },
  { id: 'xi-realmenote70', name: 'Note 70', brand: 'Realme', storage: '256GB', ram: '8GB', price: 999.99, installment: '12x de R$ 95,00', note: 'NFC', image: 'assets/xiaomi/realme-note-70.webp' },
];

// ---------- Samsung (lacrados) ----------
export const SAMSUNG_PRODUCTS: AndroidProduct[] = [
  { id: 'sam-s26plus', name: 'Galaxy S26 Plus', brand: 'Samsung', storage: '512GB', color: 'Branco', price: 4999.99, installment: '12x de R$ 475,00', image: 'assets/samsung/s26-plus-branco.webp' },
  { id: 'sam-s26ultra', name: 'Galaxy S26 Ultra', brand: 'Samsung', storage: '512GB', color: 'Dourado', price: 7200, installment: '12x de R$ 690,00', image: 'assets/samsung/s26-ultra-dourado.webp' },
];

// ---------- Acessórios ----------
export interface AccessoryProduct {
  id: string;
  name: string;
  category: string;
  detail: string;
  price: number;
  installment: string;
  image: string;
}

export const ACESSORIOS: AccessoryProduct[] = [
  { id: 'acc-samsung-67w', name: 'Carregador Samsung 67W PD', category: 'Carregador', detail: 'Fonte 67W PD · Cabo USB-C incluso', price: 99.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/carregador-samsung-67w.webp' },
  { id: 'acc-capa-17promax', name: 'Capa de Silicone iPhone', category: 'Capa', detail: 'Silicone · Consultar Cores', price: 19.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/capa-silicone-iphone-17-pro-max-vermelha.webp' },
  { id: 'acc-capa-zcom-17pro', name: 'Capa Magnética ZCOM iPhone 17 Pro', category: 'Capa', detail: 'Carregamento sem fio · Magnética', price: 49.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/capa-magnetica-zcom-iphone-17-pro.webp' },
  { id: 'acc-capa-magsafe-17promax', name: 'Capa Transparente MagSafe iPhone 17 Pro Max', category: 'Capa', detail: 'Clear Case · Magnética', price: 29.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/capa-transparente-magsafe-iphone-17-pro-max.webp' },
  { id: 'acc-bateria-yd58', name: 'Bateria Portátil Magnética 10000mAh', category: 'Power Bank', detail: "H'Maston YD58 · Cabo embutido", price: 149.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/bateria-portatil-hmaston-yd58.webp' },
  { id: 'acc-agold-30w', name: 'Carregador α Gold Turbo PD 30W', category: 'Carregador', detail: 'USB-C · 6.1A · Cabo incluso', price: 69.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/carregador-agold-30w-turbo.webp' },
  { id: 'acc-xiaomi-150', name: 'Carregador Xiaomi Turbo 150 Duo', category: 'Carregador', detail: 'USB-C · Cabo de dados incluso', price: 99.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/carregador-xiaomi-turbo-150-duo.webp' },
  { id: 'acc-fone-typec', name: 'Fone de Ouvido Type-C', category: 'Fone', detail: 'Som estéreo · Com microfone', price: 39.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/fone-de-ouvido-type-c.webp' },
  { id: 'acc-cabo-usbc', name: 'Cabo USB-C para USB-C 1m', category: 'Cabo', detail: 'Carregamento e dados · 1 metro', price: 99.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/cabo-usb-c-1m.webp' },
  { id: 'acc-cabo-lightning', name: 'Cabo USB-C para Lightning 20W', category: 'Cabo', detail: 'Carregamento rápido 20W · 1 metro', price: 49.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/cabo-usb-c-lightning-20w.webp' },
  { id: 'acc-airpods', name: 'AirPods', category: 'Fone', detail: 'Estojo de carregamento', price: 249.99, installment: 'Parcelado sem juros', image: 'assets/acessorios/airpods-3.webp' },
  { id: 'acc-fone-samsung', name: 'Fone Samsung Type-C', category: 'Fone', detail: 'Type-C · Com microfone', price: 49.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/fone-samsung-type-c.webp' },
  { id: 'acc-agold-20w', name: 'Carregador α Gold Turbo 20W', category: 'Carregador', detail: 'USB-C · 6.1A', price: 39.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/carregador-agold-20w.webp' },
  { id: 'acc-echo-dot-5', name: 'Echo Dot 5ª Geração', category: 'Caixa de Som', detail: 'Alexa · Controle por voz · Bluetooth', price: 399.9, installment: 'Parcelado sem juros', image: 'assets/acessorios/echo-dot-5-geracao.webp' },
];
