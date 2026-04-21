import { NavHamburger as BasicNavHamburger} from '@rspress/core/theme-original';

/* 自己的 hamburger 按钮 */
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


export { NavHamburger}
export * from '@rspress/core/theme-original';
import './index.css';