module.exports = {
  base: '/', // 比如你的仓库是test
  title: '前端足迹',
  description: '前端足迹,记录技术点',
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
      {
        text: '分类',
        items: [
          { text: '文章', link: '/articles/javascript/async' },
          { text: '项目', link: '/projects/hemy-progress' },
        ]
      },
      { text: 'Github', link: 'https://github.com' },
    ],
    //git remote add origin https://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@github.com/hemyWen/hemyWen.github.io.git 
    sidebar: {
      '/articles': [
        {
          title: 'javascript',
          collapsable: false,
          children: [
            '/articles/javascript/async',
            '/articles/javascript/promise',
          ]
        },
        {
          title: 'html',
          collapsable: false,
          children: [
            '/articles/html/div',
          ]
        },
      ],
      '/projects': [
        {
          title: '进度条',
          collapsable: false,
          children: [
            ['/projects/hemy-progress', '在vue中使用'],
          ]
        },
        {
          title: '倒计时组件',
          collapsable: false,
          children: [
            '/projects/hemy-count',
          ]
        },
      ]
    }

  }
}