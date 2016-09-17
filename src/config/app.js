module.exports = {
  // Api endpoints
  api: {
    articles: '/api/articles'
  },
  routes: {
    home: '/',
    articles: '/articles',
    about: '/about'
  },
  // Content vars
  sidebar: {
    navigation: [
      {
        slug: '/',
        label: 'All content',
      },
      {
        slug: '/about',
        label: 'About me',
      },
      {
        slug: '/articles',
        label: 'Articles',
      },
    ],

    socials: [
      {
        url: 'mailto:thom.hos@gmail.com',
        icon: 'email',
      },
      {
        url: 'http://www.github.com/thomhos',
        icon: 'github',
      },
      {
        url: 'http://www.facebook.com/thomhos',
        icon: 'facebook',
      },
      {
        url: 'https://nl.linkedin.com/in/thomhos',
        icon: 'linkedin',
      },
    ],

    languages: [
      {
        label: 'en',
        lang: 'en',
      },
      {
        label: 'kr',
        lang: 'kr',
      },
    ],
  },
};
