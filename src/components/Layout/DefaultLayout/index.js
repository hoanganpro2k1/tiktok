import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import slydes from './DefaultLayout.module.scss'
import SlideBar from "./SlideBar";

const cx = classNames.bind(slydes)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SlideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;