import * as Tabs from '@radix-ui/react-tabs'
import { Files, UserRound } from 'lucide-react'

import Header from './components/Header.tsx'
import CodeBlock from './components/CodeBlock.tsx'
import { useEffect, useState } from 'react'
import ToolbarHelper from './components/ToolbarHelper.tsx'
import Data from '../data.ts'

interface Project {
	id: string
	name: string
	description?: string | null
	url?: string | null
	previewImageUrl?: string | null
}

function App() {
	const [selectedTab, setSelectedTab] = useState<string>('about_me.json')
	const [projects, setProjects] = useState<Project[]>([])

	const AboutMeJSON = {
		...Data.about_me,
		projects: Object.values(projects).map((project: Project) => {
			return {
				name: project.name,
				description: project.description,
				url: project.url,
			}
		}),
	}

	useEffect(() => {
		fetch('https://api.ameliazz.xyz/projects').then((body) => {
			body.json().then((data) => {
				setProjects(data)
				console.log(AboutMeJSON)
			})
		})
	}, [])

	return (
		<div id="container">
			<Header />

			<Tabs.Root
				id="container__content"
				className="flex"
				defaultValue={selectedTab}
			>
				<Tabs.List id="container__toolbar">
					<div>
						<Tabs.Trigger
							className={`button${
								selectedTab == 'about_me.json'
									? '--selected'
									: ''
							}`}
							value="about_me.json"
							title="About Me"
							onClick={() => setSelectedTab('about_me.json')}
						>
							<Files size="24px" />
						</Tabs.Trigger>
					</div>

					<Tabs.Trigger
						className={`button${
							selectedTab == 'social.json' ? '--selected' : ''
						}`}
						value="social.json"
						title="Social"
						onClick={() => setSelectedTab('social.json')}
					>
						<UserRound size="24px" />
					</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content
					value="about_me.json"
					className={`width--fill ${
						selectedTab == 'about_me.json' ? 'code__tab' : ''
					}`}
				>
					<ToolbarHelper selectedTab={selectedTab} />
					<CodeBlock content={AboutMeJSON} language="json" />
				</Tabs.Content>

				<Tabs.Content
					value="social.json"
					className={`width--fill ${
						selectedTab == 'social.json' ? 'code__tab' : ''
					}`}
				>
					<ToolbarHelper selectedTab={selectedTab} />
					<CodeBlock content={Data.social} language="json" />
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}

export default App
