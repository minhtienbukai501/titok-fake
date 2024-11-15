import classNames from 'classnames';
import Style from './Popper.module.scss';

const cx = classNames;

function Wrapper({ children }) {
    return <ul className={cx(Style['wrapper'])}>{children}</ul>;
}

export default Wrapper;
