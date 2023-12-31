import App from './views/App.svelte';

var app = new App({
  target: document.body,
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    window.location.reload();
  });
}
