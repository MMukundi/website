import React from "react";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { PageProps } from "./util";

export function About({ page }: PageProps): JSX.Element {
	return (<PageBase title="About" page={page}>
		<div className="px-4 py-6 sm:px-0">
			<div className="rounded-lg h-96">
				<LoadMarkdown publicPath="Pages/About.md" className="pb-20" />
			</div>
		</div>
	</PageBase>)
}