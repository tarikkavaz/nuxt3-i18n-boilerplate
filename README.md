# Nuxt 3 Boilerplate

## Kurulum

Komutun sonun alan adını (test.bilgi.edu.tr) ekleyerek repo'yu klonla, ve klasöre gir.

```bash
git clone https://github.com/bilgi-webteam/nuxt3-boilerplate.git test.bilgi.edu.tr
cd test.bilgi.edu.tr
```

**yarn** ile paketleri kur.

```bash
yarn install
```

## Geliştirme

```bash
yarn dev
```

Tarayıcıda http://localhost:3000 adresini aç.

## Nuxt Config Ayarları

`nuxt.config.ts`

Site adresini gir.

```ts
const BASE_URL = "test.bilgi.edu.tr";
```

Mail adresini gir. (`Footer.vue`'da kullanım örneği var)

```ts
email: "info@bilgi.edu.tr";
```

Sayfaların adreslerini yaz.

```ts
pages: {
  about: {
    en: '/about', //http://localhost:3000/en/about
    tr: '/hakkimizda', //http://localhost:3000/tr/hakkimizda
  },
  about_theteam: {
    en: '/about/team', //http://localhost:3000/en/about/team
    tr: '/hakkimizda/ekip', http://localhost:3000/tr/hakkimizda/ekip
  },
  about_company: {
    en: '/about/company',
    tr: '/hakkimizda/firma',
  },
  contact: {
    en: '/contact',
    tr: '/iletisim',
  },
  news: {
    en: '/news',
    tr: '/haberler',
  }
},
```

Google Analytics kodunu gir.

```ts
gtag: {
  id: 'G-XXXXXXXXXX'
},
```

Google Font ayarlarını yap.

```ts
googleFonts: {
  families: {
    Raleway: '100..900',
    'Libre+Baskerville': [400, 700],
  }
}
```

## Tailwind Config Ayarları

`tailwind.config.js`

Nuxt Config'e eklenen fontları tanımla.

```js
fontFamily: {
  Raleway: ['Raleway', 'sans-serif'],
  Libre: ['Libre Baskerville', 'serif'],
},
```

Varsa ek renkleri ekle.

```js
'malachite': {
    '50': '#f0fdf4',
    '100': '#dbfde7',
    '200': '#b9f9ce',
    '300': '#82f3aa',
    '400': '#45e37d',
    '500': '#1ed760',
    '600': '#11a847',
    '700': '#11843b',
    '800': '#136832',
    '900': '#12552c',
    '950': '#042f16',
},
```

## Tercümeler

`lang/tr.ts` , `lang/en.ts` ...

Her sayfa için zorunlu olan tercümeleri ekle. Varsa diğer tercümeleri ekle.

```ts
about: 'Hakkımızda',
aboutDescription: 'Hakkımızda Sayfası Açıklaması',
aboutHeaderTitle: 'Hakkımızda Sayfası Üstalan Başlık',
aboutHeaderDescription: 'Hakkımızda Sayfası Üstalan Açıklaması',
```

## Layout

`layouts/default.vue`

`<body>` ' ye eklenecek class'ları ilk div'e; içerikler'e eklenecek class'ları `<main>` e ekle.

```html
<div
  class="flex min-h-svh flex-col justify-between bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
></div>
```

```html
<main
  class="... [&_a]:border-b-2 [&_a]:border-dotted [&_a]:border-malachite-500 hover:[&_a]:border-solid [&_a]:dark:border-malachite-200 [&_p]:mb-4 [&_p]:text-pretty"
></main>
```

## Üst alan (Header)

`components/Header.vue`

Menü başlıklarını yaz. `name` ve `to` kısmlarıda i18n adreslerini kullan.

```ts
const navigation = [
  { name: "index", to: "/" },
  {
    name: "about",
    to: "about",
    subItems: [
      { name: "about_theteam", to: "about_theteam" },
      { name: "about_company", to: "about_company" },
    ],
  },
  { name: "news", to: "news" },
  { name: "contact", to: "contact" },
];
```

## Sayfalar

`pages/about.vue`

Sayfanin dosya adını yaz.

```ts
const pageName = "about";
```

Üst alan görselini seç.

```ts
image: '/images/d.png',
```

## Sayfa içerikleri

`content/aboutTR.vue`, `content/aboutEN.vue` ...

Her dil için ayrı birer sayfa oluştur.

Sayfa adı ile başlayıp büyük harfle dilin kodunu ekle.

## Sunucuya yükleme

Sunucuda nginx ayarlarini [bu sayfa](https://www.notion.so/tarikkavaz/TBL-yeni-site-a-ma-cd39622843504cb8bfa40bef2f6af7ea)daki gibi yap

`package.json`

Sitenin sunucu IP ve klasör bilgilerini (test.bilgi.edu.tr) gir.

```json
"config": {
  "server": "deployer@172.16.0.43",
  "path": "/home/deployer/sites/test.bilgi.edu.tr/"
},
```

Yukarıdaki ayar yapıldıysa aşağıdaki komutu çalıştır.

```bash
yarn deploy
```

Bu komut sırasıyla;

- Lokaldeki `dist` klasörünü siler,
- `nuxt generate` ile yeni `dist` klasörünü oluşturur,
- Sunucudak `dist` klasörünü siler,
- Secure Copy `scp` ile lokalde yeni oluşan `dist` klasörünü sunucuya kopyalar.

---

© [tarikkavaz.com](https://tarikkavaz.com)
