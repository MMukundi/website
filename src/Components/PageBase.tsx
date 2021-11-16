/* This example requires Tailwind CSS v2.0+ */
import React, { PropsWithChildren } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavItems, mainPage, pages, Page, pageList } from './util'
import { LinkProps, useHref, useLinkClickHandler, Link } from "react-router-dom"
import { Logo } from './Logo'

const DisclosureLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			onClick,
			replace = false,
			state,
			target,
			to,
			...rest
		},
		ref
	) => {
		let href = useHref(to);
		let handleClick = useLinkClickHandler(to, {
			replace,
			state,
			target
		});

		return (
			<Disclosure.Button as="a"
				{...rest}
				href={href}
				onClick={(event: any) => {
					onClick?.(event);
					if (!event.defaultPrevented) {
						handleClick(event);
					}
				}}
				ref={ref}
				target={target}
			/>
		);
	}
);
export function PageNav({ page = mainPage, open }: { page: Page, open: boolean }) {
	return (
		<>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link to={pages[mainPage].path}>
								{/* <img
									className="h-8 w-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/> */}
								<Logo className="h-8 w-8" />
							</Link>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<NavItems page={page} base='DEBUG px-3 py-2 rounded-md text-sm font-medium text-gray-300 ' inactive='hover:bg-gray-700 hover:text-white' active='bg-gray-900 text-white' Component={DisclosureLink} />
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							{/* <button
								type="button"
								className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">View notifications</span>
								<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button> */}

							{/* Profile dropdown */}
							{/* <Menu as="div" className="ml-3 relative">
								<div>
									<Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span className="sr-only">Open user menu</span>
										<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
										{userNavigation.map((item) => (
											<Menu.Item key={item.name}>
												{({ active }) => (
													<a
														href={item.href}
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														{item.name}
													</a>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu> */}
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						{/* Mobile menu button */}
						<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
							<span className="sr-only">Open main menu</span>
							{open ? (
								<XIcon className="block h-6 w-6" aria-hidden="true" />
							) : (
								<MenuIcon className="block h-6 w-6" aria-hidden="true" />
							)}
						</Disclosure.Button>
					</div>
				</div>
			</div>

			<Disclosure.Panel className="md:hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{/* {navigation.map((item) => (
						<Disclosure.Button
							key={item.name}
							as="a"
							href={item.href}
							className={classNames(
								item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'block px-3 py-2 rounded-md text-base font-medium'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</Disclosure.Button>
					))} */}
					<NavItems page={page} base='px-3 py-2 rounded-md text-sm font-medium text-gray-300' inactive='hover:bg-gray-700 hover:text-white' active='bg-gray-900 text-white' Component={DisclosureLink} />
				</div>
				<div className="pt-4 pb-3 border-t border-gray-700">
					<div className="flex items-center px-5">
						{/* <div className="flex-shrink-0">
							<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
						</div>
						<div className="ml-3">
							<div className="text-base font-medium leading-none text-white">{user.name}</div>
							<div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
						</div> 
						<button
							type="button"
							className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span className="sr-only">View notifications</span>
							<BellIcon className="h-6 w-6" aria-hidden="true" />
						</button> */}
					</div>
					<div className="mt-3 px-2 space-y-1">
						{/* {userNavigation.map((item) => (
							<Disclosure.Button
								key={item.name}
								as="a"
								href={item.href}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
							>
								{item.name}
							</Disclosure.Button>
						))} */}
					</div>
				</div>
			</Disclosure.Panel>
		</>
	)

}

interface PageBaseProps {
	title: React.ReactNode
	page: Page
}
export default function PageBase({ page, title, children }: PropsWithChildren<PageBaseProps>) {
	const index = pageList.indexOf(page)
	const prev = index <= 1 ? null : pageList[index - 1]
	const next = index >= pageList.length - 1 ? null : pageList[index + 1]

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-gray-800">
					{({ open }) => <PageNav page={page} open={open} />}
				</Disclosure>

				<header className="bg-white shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-gray-900">{title}</h1>
					</div>
				</header>
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						{/* Replace with your content */}
						{children}
						{/* /End replace */}
					</div>
				</main>
			</div>
			{/* <footer className="flex shadow-0 bg-white w-full fixed bottom-0 items-center">
				<div className="mt-4">
					<button
						type="button"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					// onClick={closeModal}
					>
						Got it, thanks!
					</button>
					<Link
						to={pages[Page.Context].path}
						className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					>
						Tell me more
					</Link>
				</div>
			</footer> */}
			<footer className="w-full bg-white shadow-inner fixed bottom-0 h-20">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<Link
						to={prev ? pages[prev].path : pages[page].path}
						className={`${prev ? "bg-indigo-200 hover:bg-indigo-300 text-indigo-900 " : "bg-indigo-100 text-indigo-300"} ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
					>
						Back
					</Link>
					<Link
						to={next ? pages[next].path : pages[page].path}
						className={`${next ? "bg-indigo-200 hover:bg-indigo-300 text-indigo-900 " : "bg-indigo-100 text-indigo-300"} ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
					>
						Next
					</Link>
				</div>
			</footer>
		</>
	)
}
