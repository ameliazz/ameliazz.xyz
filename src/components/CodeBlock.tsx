import { useState, useEffect } from 'react'
import * as Shiki from 'shiki'

type Props = {
	content: object
	language: string
}

const update = (content: object, language: string): Promise<String> => {
	return new Promise((resolve, _) => {
		Shiki.getHighlighter({
			themes: ['rose-pine-moon'],
			langs: ['json'],
		}).then((highlighter) => {
			const codeInRawHTML = highlighter.codeToHtml(
				JSON.stringify(content, null, 2),
				{
					lang: language,
					theme: 'rose-pine-moon',
					decorations: [],
				}
			)

			setTimeout(() => {
				resolve(codeInRawHTML)
			}, 400)
		})
	})
}

const CodeBlock = ({ content, language }: Props) => {
	const [codeHtml, setCodeHTML] = useState<string>('')

	useEffect(() => {
		update(content, language).then((code) => {
			setCodeHTML(String(code))
		})
	}, [codeHtml])

	return (
		<div
			className="code__container"
			style={{ position: 'relative' }}
			dangerouslySetInnerHTML={{ __html: String(codeHtml) }}
		/>
	)
}

export default CodeBlock
