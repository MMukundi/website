/* This example requires Tailwind CSS v2.0+ */

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { pages, pageList, mainPage } from './Components/util'

// interface AppProp {
// 	page: Page
// }
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={pages[mainPage].path} />} />
				{pageList.map(page => {
					const { Component, path } = pages[page];
					return (<Route key={path} path={path} element={<Component page={+page} />} />)
				})}
			</Routes>
		</BrowserRouter>
	)
}
