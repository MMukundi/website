import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { classNames } from "./util"


export function Markdown({ text = "", className }: { text: string | null, className?: string }) {
	return <ReactMarkdown className={classNames(className ?? "", "prose sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-xl")} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{text ?? ""}</ReactMarkdown>
	// return (<>{text && <span dangerouslySetInnerHTML={{ __html: marked(text) }}></span>}</>)
}
export function LoadMarkdown({ publicPath, className }: { publicPath: string, className?: string }) {
	const [text, setText] = useState<string | null>(null)
	useEffect(() => {
		fetch(publicPath).then(resp => resp.text()).then(setText)
	}, [publicPath])
	return (<Markdown text={text} className={className} />)
}