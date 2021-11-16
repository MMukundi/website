import React from "react";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { PageProps } from "./util";

export function Summary({ page }: PageProps): JSX.Element {
	return (<PageBase title={"Putting it all together"} page={page}>
		<div className="px-4 py-6 sm:px-0">
			<div className="rounded-lg h-96">
				<LoadMarkdown publicPath="Pages/Summary.md" className="pb-8" />
			</div>
		</div>
	</PageBase>)
}