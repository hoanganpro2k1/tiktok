import classNames from 'classnames/bind';
import styles from './SlideBar.modile.scss'

const cx = classNames.bind(styles)

function SlideBar() {
    return <aside className={cx('wrapper')}>
        <h2>Slide Bar</h2>
    </aside>
}

export default SlideBar;