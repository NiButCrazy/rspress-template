import { 
  NavHamburger as BasicNavHamburger, 
  Layout as BasicLayout,
  Tabs as BasicTabs, type TabsProps,
  CodeBlock as BasicCodeBlock, type CodeBlockProps,
} from '@rspress/core/theme-original';
import './index.less';
import './icon.less';

import { type ReactNode } from 'react';
import { CssModificationProvider } from '@docs/CssModificationContext';
import { CssStyleSync } from '@docs/CssStyleSync';


// 代码块添加自定义的小语言标签
function CodeBlock(_props: CodeBlockProps) {
  const { children, ...props } = _props;
  // 通过给 title 添加额外字符串参数移除图标和语言标签
  const removeIconKeyword = '--remove-icon'
  const removeLangKeyword = '--remove-lang'
  // 基础样式
  let className = 'nbc-lang rp-copy-ignore'

  // 判断 title 额外字符串参数
  if(props.title) {
    if(props.title.includes(removeIconKeyword)) {
      props.title = props.title.replace(removeIconKeyword, '')
      className += ' remove-nbc-icon'
    }
    if(props.title.includes(removeLangKeyword)) {
      props.title = props.title.replace(removeLangKeyword, '')
      className += ' remove-nbc-lang'
    }
  }

  // 默认 txt 语言不显示语言标签
  return (
    <BasicCodeBlock {...props} >
      <span className={ className }>{ props.lang !== 'txt' && props.lang }</span>
      {children}
    </BasicCodeBlock>
  )
}

// Tab 类型定义
type TabItem = {
    label?: string | ReactNode;
    disabled?: boolean;
    content?: ReactNode;
};

// 支持 tab 图标自定义组件
function Tabs(_props: TabsProps){
  const { children, ...props } = _props;
  // 只针对数组, 毕竟越复杂越容易出错
  if(Array.isArray(children)){
    const values: TabItem[] = []
    children.forEach( item => {
      // 判断是否移除 label 图标的后缀
      const suffix = '--remove-icon';
      const label:string = item?.props?.label
      // 逆天, 但没办法
      const lang = item?.props?.children?.props?.children?.props?.lang

      // label 明示移除图标参数
      if(label && label.endsWith(suffix)){
        const mainLabel = label.replace(suffix, '').trim();
        values.push({
          label: mainLabel,
          content: item.props.children
        })
        return
      }
      
      // 正常的 Tab
      values.push({
        label: lang 
          ? <span className={`icon-${lang}`}>{item.props.label}</span>
          : item.props.label,
        content: item.props.children
      })
    })
    // 返回自定义图标组件
    return (
      <BasicTabs {...props} values={values}>{children}</BasicTabs>
    )
  }
  // 兜底默认
  return (
    <BasicTabs {...props}>{children}</BasicTabs>
  )
}

// TODO 如果用不到 CSSPickerEditor 组件的话可以删
// 基础布局添加上 css 上下文
function Layout() {
  return (
    <CssModificationProvider>
      <CssStyleSync />
      <BasicLayout />
    </CssModificationProvider>
  )
}


// 自己的 hamburger 按钮
function NavHamburger(){
  return (
    <div className="nbc-nav-container">
      <BasicNavHamburger/>
      <div className="nbc-button-container">
        <span className="nbc-top" />
        <span className="nbc-middle" />
        <span className="nbc-bottom" />
      </div>
    </div>
  );
}


export { NavHamburger, Layout, Tabs, CodeBlock }
export * from '@rspress/core/theme-original';


