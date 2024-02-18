import { Laptop, X } from 'lucide-react'

const Header = () => {
	return (
		<nav id="container__header">
			<Laptop color="#7f7fd5" />
			<h4>Amélia.Zz</h4>
			<X
				onClick={() => {
					window.location.replace(
						'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
					)
				}}
				style={{ cursor: 'pointer' }}
			/>
		</nav>
	)
}

export default Header
