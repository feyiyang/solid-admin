/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import routes from './routes/index'
import App from './app'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './index.less'

import './mock'

const root = document.getElementById('root')

render(() => <Router root={App}>{routes}</Router>, root!)
