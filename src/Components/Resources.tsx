import React, { PropsWithChildren } from "react";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { PageProps } from "./util";

function Checkbox({ children }: PropsWithChildren<{}>) {
	return (<div className="flex items-start">
		<div className="flex items-center h-5">
			<input
				id="offers"
				name="offers"
				type="checkbox"
				className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
			/>
		</div>
		<div className="ml-3 text-sm">
			<label htmlFor="offers" className="font-medium text-gray-700">
				{children}
			</label>
			{/* <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p> */}
		</div>
	</div>)
}

export function Resources({ page }: PageProps): JSX.Element {
	return (<PageBase title={"Resources"} page={page}>
		<div className="px-4 pb-40 sm:px-0">
			<div className="rounded-lg h-96">
				<span className="pb-40">
					<LoadMarkdown publicPath="Pages/Resources.md" className="pb-40" />

				</span>
			</div>
		</div>
	</PageBase>)
}
