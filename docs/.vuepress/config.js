module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],  //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '百度', link: 'https://baidu.com' },
      { text: 'Github', link: 'https://github.com' },
    ],

    sidebar: {
      '/articles': [
        {
          title: 'javascript',
          collapsable: true,
          children: [
            '/articles/javascript/async',
            '/articles/javascript/promise',
          ]
        },
        {
          title: 'html',
          collapsable: true,
          children: [
            '/articles/html/div',
          ]
        },
      ],
      '/projects': [
        {
          title: 'vue进度条',
          collapsable: true,
          children: [
            '/projects/hemy-progress',
          ]
        },
        {
          title: '倒计时组件',
          collapsable: true,
          children: [
            '/projects/hemy-count',
          ]
        },
      ]
    }

  }
}