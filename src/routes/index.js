// File cấu hình router
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// Không cần đăng nhập vẩm vào được
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: null }
]

// Bắt đăng nhập mới vào được 
const privateRoutes = [

]

export { publicRoutes, privateRoutes }