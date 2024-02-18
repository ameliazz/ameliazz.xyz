import { Braces } from 'lucide-react'

const ToolbarHelper = ({ selectedTab }: { selectedTab: string }) => {
	return (
		<div id="container__toolbar__helper">
			<span>
				<Braces size="0.9rem" color="#d5c759" />
				<p>{selectedTab}</p>
			</span>
		</div>
	)
}

export default ToolbarHelper
