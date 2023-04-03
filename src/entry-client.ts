import { createApp } from './main';
import '@/assets/scss/index.scss';
const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.state.value = JSON.parse(JSON.stringify(window.__INITIAL_STATE__));
}

router.isReady().then(() => {
  app.mount('#app');
});
