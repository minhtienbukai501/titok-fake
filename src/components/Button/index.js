import { Link } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Button.module.scss';

const cx = classNames;

function Button({ to, href, primary, children, onClick, ...afterProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...afterProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classname = cx(styles['wrapper'], {
        [styles.primary]: primary,
    });

    return (
        <Comp className={classname} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
