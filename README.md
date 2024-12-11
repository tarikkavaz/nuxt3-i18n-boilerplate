# Nuxt 3 Boilerplate

## Installation

Install the packages with **yarn**.

```bash
yarn install
```

## Development

```bash
yarn dev
```

Open http://localhost:3000 in your browser.

## Nuxt Config Settings

`nuxt.config.ts`

Enter the site address.

```ts
const BASE_URL = "www.domain.com";
```

Enter the email address. (Example usage in `Footer.vue`)

```ts
email: "info@domain.com";
```

Enter the page addresses.

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

Enter the Google Analytics code.

```ts
gtag: {
  id: 'G-XXXXXXXXXX'
},
```

Configure Google Fonts.

```ts
googleFonts: {
  families: {
    Raleway: '100..900',
    'Libre+Baskerville': [400, 700],
  }
}
```

## Tailwind Config Settings

`tailwind.config.js`

Define the fonts added to Nuxt Config.

```js
fontFamily: {
  Raleway: ['Raleway', 'sans-serif'],
  Libre: ['Libre Baskerville', 'serif'],
},
```

Add additional colors if any.

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

## Translations

`lang/tr.ts` , `lang/en.ts` ...

Add the required translations for each page. Add other translations if any.

```ts
about: 'About',
aboutDescription: 'About Page Description',
aboutHeaderTitle: 'About Page Header Title',
aboutHeaderDescription: 'About Page Header Description',
```

## Layout

`layouts/default.vue`

Add the classes to be added to `<body>` to the first div; add the classes to be added to the contents to `<main>`.

```html
<div
  class="flex flex-col justify-between min-h-svh bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
></div>
```

```html
<main
  class="... [&_a]:border-b-2 [&_a]:border-dotted [&_a]:border-malachite-500 hover:[&_a]:border-solid [&_a]:dark:border-malachite-200 [&_p]:mb-4 [&_p]:text-pretty"
></main>
```

## Header

`components/Header.vue`

Write the menu titles. Use i18n addresses in `name` and `to` parts.

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

## Pages

`pages/about.vue`

Write the file name of the page.

```ts
const pageName = "about";
```

Select the header image.

```ts
image: '/images/d.png',
```

## Page Contents

`content/aboutTR.vue`, `content/aboutEN.vue` ...

Create a separate page for each language.

Start with the page name and add the language code in uppercase.

## Deployment to Server

`package.json`

Enter the server IP and folder information of the site (www.domain.com).

```json
"config": {
  "server": "deployer@172.16.0.43",
  "path": "/home/deployer/sites/www.domain.com/"
},
```

If the above settings are done, run the following command.

```bash
yarn deploy
```

This command will:

- Delete the `dist` folder locally,
- Create a new `dist` folder with `nuxt generate`,
- Delete the `dist` folder on the server,
- Copy the newly created `dist` folder locally to the server with Secure Copy `scp`.