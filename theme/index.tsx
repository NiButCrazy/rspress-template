import { 
  NavHamburger as BasicNavHamburger, 
  SwitchAppearance as BasicSwitchAppearance ,
} from '@rspress/core/theme-original';
import './index.css';

import { useDark } from '@rspress/core/runtime';
import { useCallback } from 'react';


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


export { NavHamburger, SwitchAppearance }
export * from '@rspress/core/theme-original';


