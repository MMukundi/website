import { Main } from "./Main"
import { About } from "./About"
import { Resources } from "./Resources"
import React from "react"
import { Link } from "react-router-dom"
// import { Context } from "./Context"
import { Brief } from "./Brief"
import { strict as assert } from 'assert';
import { Ethics } from "./Ethics"
import { Data } from "./Data"
import { Access } from "./Access"
import { Summary } from "./Summary"

export enum Page {
	Main,
	About,
	Resources,
	// Context,
	Mystery,
	Ethics,
	Data,
	Access,
	Summary
}

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}
// export const navigation = [
// 	{ name: 'Dashboard', href: '#', current: true },
// 	{ name: 'Team', href: '#', current: false },
// 	{ name: 'Projects', href: '#', current: false },
// 	{ name: 'Calendar', href: '#', current: false },
//   ]
export interface PageProps {
	page: Page
}
interface PageOptions {
	Component: React.FC<PageProps>
	name?: string
	current: boolean
	path: string
}

export type NavElement = (page: Page) => JSX.Element;


// export function pageSetter(page: Page): MouseEventHandler {
// 	return () => {
// 		setPage(page)
// 	}
// }
export interface NavProps {
	popover: boolean
}
export const mainPage = Page.Main
export const pages: Record<Page, PageOptions> = {
	[Page.Main]: {
		Component: Main,
		current: true,
		path: "/home"
	},
	[Page.Mystery]: {
		Component: Brief,
		name: 'Brief',
		current: false,
		path: "/brief"
	},
	[Page.About]: {
		Component: About,
		name: 'About',
		current: false,
		path: "/about"
	},
	[Page.Summary]: {
		Component: Summary,
		name: 'Summary',
		current: false,
		path: "/summary"
	},
	[Page.Resources]: {
		Component: Resources,
		name: 'Resources',
		current: false,
		path: "/resources"
	},
	// [Page.Context]: {
	// 	Component: Context,
	// 	name: 'Context',
	// 	current: false,
	// 	path: "/context"
	// },
	[Page.Ethics]: {
		Component: Ethics,
		name: 'Ethics',
		current: false,
		path: "/ethics"
	},
	[Page.Data]: {
		Component: Data,
		name: 'Data',
		current: false,
		path: "/data"
	},
	[Page.Access]: {
		Component: Access,
		name: 'Access',
		current: false,
		path: "/access"
	},
} as const
export const pageList = [
	Page.Main,
	Page.Mystery,
	Page.Ethics,
	Page.Data,
	Page.Access,
	Page.Summary,
	Page.Resources,

	// Page.Context,
	Page.About,
]
assert.equal(pageList.length, Object.keys(pages).length, "Not all pages in page list")
console.log(pageList, pages)
// export const pageList = (Object.keys(pages) as unknown as (keyof typeof pages)[]).map((page: Page) => ({ ...pages[page], page }))

// function getDefault(page: Page): string {
// 	return classNames(
// 		pages[page].current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// 		'px-3 py-2 rounded-md text-sm font-medium'
// 	)
// }

// const scholarlyTag = "__scholarly__"


export function NavItems({ page: currentPage = mainPage, base = "", inactive = "", active = "", Component = Link }) {
	// const [scholarly, setScholarly] = useState(localStorage.getItem(scholarlyTag) === "true")
	return (<>{pageList.map((navPage) => (
		pages[navPage].name
		&&
		<Component
			key={pages[navPage].name}
			to={pages[navPage].path}
			className={classNames(+navPage === currentPage ? active : inactive, base)}
			aria-current={+navPage === currentPage ? 'page' : undefined}
		>
			{pages[navPage].name}
		</Component>
	))}
		{/* <Toggle key={scholarlyTag} value={scholarly}
			label={scholarly ? "Scholarly" : "Casual"}
			labelClass={classNames(`px-3 py-2 rounded-md text-sm font-medium`, base)}
			onChange={(toggleValue) => {
				console.log(localStorage.getItem(scholarlyTag))
				setScholarly(toggleValue)
				localStorage.setItem(scholarlyTag, toggleValue.toString())
				console.log(localStorage.getItem(scholarlyTag))
			}
			} /> */}
	</>)
}