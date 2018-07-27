module.exports={
    // 默认标题，会被地区标题覆盖
    title:"Silver湫澲",
    // 默认描述，会被地区描述覆盖
    description:"Z(t+Δ)=f[Z(t),t+Δ]",
    base:"/",
    dest:"build",
    port:"8080",
    serviceWorker:"true",
    locales:{
        "/":{
            lang:"zh-CN",
        },
    },
    themeConfig:{
        sidebarDepth:2,
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        nav:[
            {text:"主页",link:"/"},
            // {text:"笔记",link:"/note/"},
            // {text:"文集",link:"/wenji/"},
            // {text:"关于",link:"/about"},
        ],
        sidebar:{
            // 除此之外还可以自定侧边栏
            '/':[{
                title: '摘要',
                collapsable: false,
                children: [
                  ['/','主页'],
                  ['/about','关于'],
                ]
              },]
        }
    }
}