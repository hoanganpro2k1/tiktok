// File cấu hình router
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Không cần đăng nhập bẩm vào được
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null }
]

// Bắt đăng nhập mới vào được 
const privateRoutes = [

]

export { publicRoutes, privateRoutes }