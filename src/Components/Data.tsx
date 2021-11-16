import React from "react";
import { Link } from "react-router-dom";
import { LoadMarkdown } from "./Markdown";
import PageBase from "./PageBase";
import { Page, PageProps, pages } from "./util";

export function Data({ page }: PageProps): JSX.Element {
	return (<PageBase title="Data" page={page}>
		<div className="px-4 py-6 sm:px-0">
			<div className="rounded-lg h-96">
				<LoadMarkdown publicPath="Pages/Data.md" className="pb-20" />
			</div>
		</div>
	</PageBase>)
}