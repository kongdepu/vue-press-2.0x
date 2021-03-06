const { defaultTheme } = require('vuepress')
const headConfig = require('./config/headConfig') // 页面头部
const navConfig = require('./config/navConfig') // 导航栏
const sideConfig = require('./config/sideConfig') // 侧边栏

module.exports = {
    base:'/',
    lang: 'zh-CN',
    title: '温柔',
    head: headConfig,
    description: 'VuePress',
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/logo.png',
        // 导航栏
        navbar: navConfig,
        // 侧边栏
        sidebar: sideConfig
    }),
}