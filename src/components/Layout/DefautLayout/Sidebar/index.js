import classNames from 'classnames';
import Styles from './Sidebar.module.scss';

const cx = classNames;

function Sidebar() {
    return (
        <aside className={cx(Styles['wrapper'])}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
