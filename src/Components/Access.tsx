import React from "react";
import { Link } from "react-router-dom";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { Page, PageProps, pages } from "./util";

export function Access({ page }: PageProps): JSX.Element {
	return (<PageBase title="Access" page={page}>
		<div className="px-4 py-6 sm:px-0">
			<div className="rounded-lg h-96">
				<LoadMarkdown publicPath="Pages/Access.md" className="pb-20" />
			</div>
		</div>
	</PageBase>)
}

export const ComputerVisionDescription = {
	brief: (<>Computer vision is a broad field, so its hard to give it a specific definition. For all intents and purposes though, think of it as any way to enable algorithms to 'see'.</>),
	InDepth: (<>This is more in-depth:<br />You see, computer vision is a broad field, so its hard to give it a specific definition. For all intents and purposes though, think of it as any way to enable algorithms to 'see'.</>)
}