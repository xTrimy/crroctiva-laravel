
import './i18n/i18n.ts';
import './ziggy.js';
import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
{ 
  (typeof window === 'undefined') && console.log('SSR is enabled'); 
}
createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
      return pages[`./Pages/${name}.tsx`]
    },
    setup: ({ App, props }) => {
      return <App {...props } />;
    },
  })
)