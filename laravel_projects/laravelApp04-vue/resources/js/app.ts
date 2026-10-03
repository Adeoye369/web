import { createInertiaApp } from '@inertiajs/vue3';
import Layout from './pages/components/Layout.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },

    layout: ()=> Layout
});
