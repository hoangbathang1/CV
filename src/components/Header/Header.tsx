

import {Link} from "react-router-dom";
import styles from  './header.module.scss';

const Header = () => {

  return (
    <div className={styles.header}>
    <ul className={styles.nav}>
        <li><Link to='/'>Giới Thiệu</Link></li>
        <li><Link to='/skill/skill/nanglucs'>Kỹ Năng</Link></li>
        {/* <li><Link to='/sothich'>Sở Thích</Link></li> */}
        <li><Link to='/chinhsua/profile'>Chỉnh Sửa</Link></li>
        
    </ul>
  
</div>

  )
}

export default Header;
