import { createInertiaApp } from '@inertiajs/vue3';
// import { createApp, h } from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    }
    // setup({ el, App, props, plugin }) {
    //     const vueApp = createApp({ render: () => h(App, props) });
    //     vueApp.use(plugin);
    //     vueApp.mount(el);
    // }   
});
