import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import AboutMe from '../components/pages/landing/AboutMe'
import HeroSection from '../components/pages/landing/HeroSection'
import Recently from '../components/pages/landing/Recently'

export default function Index() {
	return (
		<div
			style={{
				fontFamily: 'system-ui, sans-serif',
				lineHeight: '1.4',
			}}
		>
			<Header />
			<HeroSection />
			<Recently />
			<AboutMe />
			<Footer />
		</div>
	)
}
