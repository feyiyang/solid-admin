/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'
import { Router } from '@solidjs/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root')

render(() => (
    <App />
), root!)
