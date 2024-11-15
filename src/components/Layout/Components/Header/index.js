import classNames from 'classnames';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames;

function Header() {
    const [searchRs, setSearchRs] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchRs([]);
        }, 1000);
    });
    return (
        <header className={cx(styles['wrapper'])}>
            <div className={cx(styles['inner'])}>
                <div className={cx(styles['logo-titok'])}>
                    <img className={cx(styles['logo-img'])} src={images.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchRs.length > 0}
                    render={(artrs) => (
                        <div className={cx(styles['search-rs'])} {...artrs}>
                            <PopperWrapper>
                                <li className={cx(styles['search-item'])}>
                                    <div className={cx(styles['search-icon'])}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                    <div>
                                        <h4 className={cx(styles['search-title'])}>xin lỗi vì xuất hiện remix</h4>
                                    </div>
                                </li>

                                <li className={cx(styles['search-footer'])}>
                                    <p className={cx(styles['search-desc'])}>
                                        Xem tất cả kết quả dành cho "xin lỗi vì xuất hiện"
                                    </p>
                                </li>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx(styles['action'])}>
                    <Button primary href="https://fb.com/tienxyzit" onClick={() => {}} target="_blank">
                        Đăng Nhập
                    </Button>
                    <div className={cx(styles['action-icon'])}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
