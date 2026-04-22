import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { applyTheme } from './lib/theme'

applyTheme('green');

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
