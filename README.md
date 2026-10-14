# Central dos Celulares — site da loja (Angular)

Projeto Angular 18 (standalone components) para a **Central dos Celulares**
(Campina Grande - PB): vitrine de iPhones e celulares, seção de destaque,
contato e localização, usando a logo e os dados reais da loja.

## Como rodar

```bash
npm install
npm start
```

Depois acesse `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/central-dos-celulares`.

## Estrutura

```
src/assets/logo.jpg   -> logo oficial da loja (usada no header e footer)
src/app/
  components/
    header/     -> menu fixo + logo real da loja
    hero/        -> chamada principal com visual de sinal/rede animado
    featured/     -> destaque do modelo topo de linha (spec sheet)
    catalog/     -> grade de produtos com filtro por marca
    contact/     -> formulário de contato + canais (WhatsApp, telefone, e-mail)
    location/     -> mapa incorporado + horário de funcionamento
    footer/
  data/products.ts -> catálogo de iPhones e Android (dados fictícios, edite à vontade)
```

## Dados já preenchidos com informações reais

- **Endereço:** Lago Business Center — Av. Mal. Floriano Peixoto, 1350, 4º andar,
  sala 27, Santo Antônio, Campina Grande - PB, CEP 58406-015.
- **WhatsApp/Telefone:** (83) 98102-4384.
- **Horário:** Seg a sex 09h–18h, sáb 09h–15h, domingo fechado.
- **Mapa:** apontando para a localização real no Google Maps.

## O que ainda é fictício (ajuste antes de publicar)

- **E-mail:** `contato@centraldoscelulares.com.br` — troque pelo e-mail real da loja.
- **Catálogo de produtos e preços:** em `src/app/data/products.ts` — troque pelos
  modelos, cores, armazenamentos e preços reais que a loja vende.

## Personalizar

- **Produtos:** edite `src/app/data/products.ts`.
- **Cores/tipografia:** tokens no topo de `src/styles.css` (`:root`), já ajustados
  ao azul/ciano da identidade visual da loja.
- **Logo:** troque `src/assets/logo.jpg` por uma versão em maior resolução, se tiver.
