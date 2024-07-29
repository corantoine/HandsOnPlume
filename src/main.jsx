import React from 'react'
import ReactDOM from 'react-dom/client'
import { A11yProvider, NotificationProvider } from 'plume-react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<A11yProvider>
			<NotificationProvider>
				<App />
			</NotificationProvider>
		</A11yProvider>
	</React.StrictMode>
)
