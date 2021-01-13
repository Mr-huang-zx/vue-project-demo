import Vue from 'vue'

const componentsContext = require.context('./',true,/\.js$/);  // 同级 是否循环读取子文件目录  正则验证文件名.js结尾

componentsContext.keys().forEach(component=>{
    const componentConfig = componentsContext(component)
    // 兼容import export 和require module.export两种规范
    const ctrl = componentConfig.default || componentConfig;
    // 加载全局组件
    if(ctrl && ctrl.name){
        Vue.component(ctrl.name,ctrl)
    }
})