/* @refresh reload */
import { render } from 'solid-js/web'
import type { RouteDefinition } from '@solidjs/router'
import { Router } from '@solidjs/router'

import './mock'
import './index.less'
import routes from './router/routes'
import App from './App'

const root = document.querySelector('#root')

render(() => <Router root={App}>{routes as RouteDefinition[]}</Router>, root!)
