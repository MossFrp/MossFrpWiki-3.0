module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'MossFrp Wiki',
    description: 'MossFrp 官方文档',
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: '搜索文档',
              }
            },
          },
        ],
      ],
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://mossmirror.heycrab.xyz/static/img/bigmoshou.jpg',
        nav: [
          { text: "首页", link: "/" },
          { text: "Mossfrp官网", link: "https://baidu.com" },
          { text: "加入我们" , link: "https://jq.qq.com/?_wv=1027&k=8DWtQWn6"}
        ],
        sidebar: {
            '/': [
            {
                text: '主页',
                collapsible: true,
                children: ['/readme.md', '/beforeask.md'],
            },
            {
                text: '使用客户端',
                collapsible: false,
                children: ['/client/windows.md', '/client/linux.md','/client/MossFrpStandard.md','MossFrp_Client.md'],
            },
            {
                text: ''
            },
            {
                text: 'FAQ',
                collapsible: true,
                children: ['/help/main.md', '/help/collection.md'],
            },
            ],
      },
    }
  }