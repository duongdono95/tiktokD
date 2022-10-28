// Pages
import Home from '~/pages/HomePage/HomePage';
import Following from '~/pages/FollowingPage/FollowingPage';
import Profile from '~/pages/ProfilePAge/ProfilePage';
import Upload from '~/pages/UploadPage/UploadPage';
import Search from '~/pages/SearchPage/SearchPage';

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
