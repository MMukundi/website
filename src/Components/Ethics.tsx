import React from "react";
import { Link } from "react-router-dom";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { Page, PageProps, pages } from "./util";

export function Ethics({ page }: PageProps): JSX.Element {
	return (<PageBase title="Ethics" page={page}>
		<div className="px-4 pb-40 sm:px-0">
			<div className="rounded-lg h-96">
				<LoadMarkdown publicPath="Pages/Ethics.md" className="pb-20" />
			</div>
		</div>
	</PageBase>)
}