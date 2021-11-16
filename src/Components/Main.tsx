import React from "react";
import { Fragment, useState } from 'react'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavItems, Page, PageProps, pages } from './util'
import { Link } from "react-router-dom"
import { Logo } from "./Logo";
import { LoadMarkdown } from "./Markdown";

export function Main({ page }: PageProps): JSX.Element {
	let [isOpen, setIsOpen] = useState(false)
	return (<div className="bg-white h-full overflow-hidden" >
		<MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		<div className="max-w-7xl mx-auto">
			<div className="lg:h-screen relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-0 xl:pb-32">

				<div className="z-10 lg:relative">
					<Popover>
						<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
							<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
								<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
									<div className="flex items-center justify-between w-full md:w-auto">
										<>
											<span className="sr-only">Home</span>
											<Logo />
											{/* <img
												className="h-8 w-auto sm:h-10"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												alt="logo"
											/> */}
										</>
										<div className="-mr-2 flex items-center md:hidden">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Open main menu</span>
												<MenuIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
									<NavItems page={page} base="font-medium text-gray-500 hover:text-gray-900" />
								</div>
							</nav>
						</div>

						<Transition
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								focus
								className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
							>
								<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div className="px-5 pt-4 flex items-center justify-between">
										<div>
											{/* <img
												// className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												alt=""
											/> */}
											<Logo className="h-8 w-auto" />
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Close main menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="px-2 pt-2 pb-3 space-y-1">
										<NavItems page={page} base='px-3 py-2 rounded-md text-sm font-medium text-gray-300' inactive='hover:bg-gray-700 hover:text-white' active='bg-gray-900 text-white' />
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<main className="lg:h-full inline-block mt-10mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-40 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">Go on a mission to explore</span>{' '}
								<span className="block text-indigo-600 xl:inline">Computer vision</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Learn how to employ artificial intelligence as diligently and ethically as possible.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link
										to={pages[Page.Mystery].path}
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
									>
										Let's go!
									</Link>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<button
										// to={pages[Page.About].path}
										onClick={() => setIsOpen(true)}
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
									>
										What's computer vision?
									</button>
								</div>
							</div>
						</div>
					</main>
				</div>
				<svg
					className="z-0 hidden lg:inline absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100" />
					{/* <polygon points="0,0 50,0 50,100 0,100" /> */}
				</svg>
			</div>
		</div>
		<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full">
			{/* <img
				className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
				alt=""
			/> */}
			<div className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full heropattern-circuitboard-white hidden   bg-indigo-600      dark:block"></div>
			<div className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full heropattern-circuitboard-indigo-600 block       dark:hidden"></div>
		</div>
	</div >)
}

function MyDialog({ isOpen = false, setIsOpen = (b: boolean) => { } }) {
	const closeModal = () => setIsOpen(false)

	return (
		// <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
		// 	<Dialog.Overlay />

		// 	<Dialog.Title>Deactivate account</Dialog.Title>
		// 	<Dialog.Description>
		// 		This will permanently deactivate your account
		// 	</Dialog.Description>

		// 	<p>
		// 		Are you sure you want to deactivate your account? All of your data will
		// 		be permanently removed. This action cannot be undone.
		// 	</p>

		// 	<button onClick={() => setIsOpen(false)}>Deactivate</button>
		// 	<button onClick={() => setIsOpen(false)}>Cancel</button>
		// </Dialog>
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={closeModal}
			>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"

						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-indigo-600 bg-opacity-50 transition-opacity" />
					</Transition.Child>


					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
							{/* <Dialog.Title
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Computer Vision
							</Dialog.Title>
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									{ComputerVisionDescription.brief}
								</p>
							</div> */}
							<LoadMarkdown publicPath={"/BriefComputerVision.md"} />

							<div className="mt-4">
								<button
									type="button"
									className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									onClick={closeModal}
								>
									Got it, thanks!
								</button>
								{/* <Link
									to={pages[Page.Brief].path}
									className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
								>
									Tell me more
								</Link> */}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}