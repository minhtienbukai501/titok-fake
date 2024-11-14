import Home from '~/Pages/Home/Home';
import Following from '~/Pages/Following/Following';
import Upload from '~/Pages/Upload/Following';
import { HaveHeaderLayout } from '~/components/Layout';

export const publicRoutes = [
    {
        path: '/*',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HaveHeaderLayout,
    },
];

export const privateRoutes = [];
