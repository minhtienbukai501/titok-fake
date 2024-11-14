import Header from '~/components/Layout/Components/Header';
import Sidebar from './Sidebar';
import Styles from './DefaultLayout.module.scss';
import classNames from 'classnames';

const cx = classNames;

function DefaultLayout({ children }) {
    return (
        <div className={cx(Styles['wrapper'])}>
            <Header />
            <div className={cx(Styles['container'])}>
                <Sidebar />
                <div className={cx(Styles['content'])}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
