1. App.js:
    - import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    - Wrapping the whole "div class = App" by Router;
    - Creating routes/index.js in src
        - import Home from '~/pages/Home';

            const publicRoutes = [
            { path: '/', component: Home },
            ];

            export { publicRoutes, privateRoutes };
