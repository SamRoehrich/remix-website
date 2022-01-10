import NextJS from '../../icons/NextJS'
import Story from '../../reusable/Story'

export default function () {
	return (
		<section className="flex flex-col px-24">
			<h1 className="text-3xl font-serif text-center mb-10">Recently</h1>
			<Story
				title="front end engineer - hello alice"
				description="Hello Alice is a free to use platform for small businesses to find helpful resources for starting and maintaining
                 their business. Amoung the free information they also provide equitable access to capitol."
				myRole="When I got to Hello Alice they were in the process of re-writing their web application with NextJS. My job here was to 
                assist the team in the re-write as well as maintain their product. Daily requirements of the job included colaborating with the 
                design and development teams when adding or maintaining components, writing unit tests, writing GraphQL calls and working in an agile
                enviroment."
				icons={[
					'NextJS',
					'React',
					'Apollo Client',
					'Styled Components',
					'SaSS',
				]}
			/>
		</section>
	)
}
