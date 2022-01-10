interface Props {
	title: string
	description: string
	myRole: string
	icons: string[]
}

export default function ({ title, description, myRole, icons }: Props) {
	return (
		<section className="h-[calc(100%+10rem)] flex">
			<div className="w-3/5  space-y-4">
				<h2 className="capitalize text-2xl font-serif">{title}</h2>
				<div className="space-y-4">
					<h3 className="text-lg">{description}</h3>
					<p className="text-lg">
						<b>My Role - </b>
						{myRole}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center w-2/5">
				<h2 className="capitalize text-2xl font-serif">Tools</h2>
				<ul className="flex flex-col py-4 px-12 space-y-2 w-full">
					{icons.map((icon) => (
						<li className="text-lg">{icon}</li>
					))}
				</ul>
			</div>
		</section>
	)
}
