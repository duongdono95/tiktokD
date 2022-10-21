// Pages
import Home from '~/pages/HomePage';
import Following from '~/pages/FollowingPage';
import Profile from '~/pages/ProfilePage';
import Upload from '~/pages/UploadPage';
import Search from '~/pages/SearchPage';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload },
    { path: '/search', component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
