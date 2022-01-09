import { Link } from 'remix'
import Moon from '../icons/Moon'

export default function Header() {
	return (
		<header className="flex justify-between p-8">
			<h1>Sam Roehrich</h1>
			<div className="space-x-10">
				<Link to="/blog">Blog</Link>
				<Link to="/work">Work</Link>
			</div>
			<button type="button">
				<Moon />
			</button>
		</header>
	)
}
