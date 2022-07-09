import React from 'react'
import ReactDom from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context';

import App from './App'

ReactDom.render(
    <SpeechProvider appId='83c42bad-0df0-42dc-8307-dc970d16e34a' language='en-US'>

        <Provider>

            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));