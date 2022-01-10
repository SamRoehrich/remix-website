import Apollo from '../../icons/Apollo'
import NextJS from '../../icons/NextJS'
import ReactSvg from '../../icons/ReactSvg'
import RemixSvg from '../../icons/RemixSvg'
import Tailwind from '../../icons/Tailwind'

export default function () {
	return (
		<section className="p-24">
			<h1 className="font-serif text-2xl text-center mb-10">Who Am I</h1>
			<p className="text-lg font-serif mb-10">
				A lifelong desert rat who learned to code in his late teen years. Worked
				several freelance/contract positions and am open to new work. My skills
				include UI/UX design and development, API design and implementation,
				cloud services and professional communication. When I am not creating
				your new user interface I am likely cooking something out of{' '}
				<a href="http://www.omnivorescookbook.com">onmivores cookbook</a>,
				pushing the pedals of a bicycle or climbig up a piece of granite.
			</p>
			<h1 className="font-serif text-2xl text-center mb-10">What I Know</h1>
			<div className="flex justify-between items-center h-full">
				<NextJS />
				<ReactSvg />
				<RemixSvg />
				<Apollo />
			</div>
		</section>
	)
}
