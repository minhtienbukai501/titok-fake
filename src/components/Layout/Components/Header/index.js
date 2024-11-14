import classNames from 'classnames';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames;

function Header() {
    return (
        <header className={cx(styles['wrapper'])}>
            <div className={cx(styles['inner'])}>
                <div className={cx(styles['logo-titok'])}>
                    <img className={cx(styles['logo-img'])} src={images.logo} alt="Tiktok"></img>
                </div>
                <div className={cx(styles['search'])}>
                    <input placeholder="Tìm kiếm đi nào" width={60} />

                    <button className={cx(styles['loading'])}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>

                    <button className={cx(styles['close'])}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <button className={cx(styles['search-btn'])}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx(styles['action'])}>
                    <button>Đăng Nhập</button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
}

export default Header;
