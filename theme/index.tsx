import { 
  NavHamburger as BasicNavHamburger, 
  SwitchAppearance as BasicSwitchAppearance ,
  Layout as BasicLayout,
  Tabs as BasicTabs, type TabsProps,
  CodeBlock as BasicCodeBlock, type CodeBlockProps,
} from '@rspress/core/theme-original';
import './index.less';
import './icon.less';

import { useDark } from '@rspress/core/runtime';
import { useCallback, type ReactNode } from 'react';
import { CssModificationProvider } from '@docs/CssModificationContext';
import { CssStyleSync } from '@docs/CssStyleSync';


// 代码块添加自定义的小语言标签
function CodeBlock(_props: CodeBlockProps) {
  const { children, ...props } = _props;
  return (
    <BasicCodeBlock {...props} >
      { props.lang !== 'txt' && <span className='nbc-lang'>{ props.lang }</span>}
      {children}
    </BasicCodeBlock>
  )
}

type TabItem = {
    label?: string | ReactNode;
    disabled?: boolean;
    content?: ReactNode;
};

// 支持 tab 图标自定义组件
function Tabs(_props: TabsProps){
  const { children, ...props } = _props;
  if(Array.isArray(children)){
    const values: TabItem[] = []
    children.forEach( item => {
      // 逆天,但没办法
      const lang = item.props?.children?.props?.children?.props?.lang
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

// 修复主题无法切换至 auto 的问题
function SwitchAppearance(){
  const isDark = useDark();
  
  const handleClick = useCallback(()=>{
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // isDark 是 onclick 点击后改变的, 因此 handleClick 里的 isDark 是上一次的值
    if(preferDark === !isDark){
      localStorage.setItem('rspress-theme-appearance', 'auto');
      // 触发同步 storage 事件, 无需重新刷新页面
      window.dispatchEvent(
        new CustomEvent('RSPRESS_SYNC_STORAGE_EVENT_NAME', {
          detail: { key: 'rspress-theme-appearance', newValue: 'auto'},
        })
      );
    }
  }, [isDark])
  
  return <BasicSwitchAppearance onClick={ handleClick }/>
}

export { NavHamburger, SwitchAppearance, Layout, Tabs, CodeBlock }
export * from '@rspress/core/theme-original';


