import TopBar from 'components/TopBar'
import Footer from '../components/Footer' 
import Chartboard1 from '../components/Chartboard1' 
import Chartboard2 from '../components/Chartboard2' 
import Header from '../components/Header'      
export default function Multipanel() {
	return(
		<>
			<TopBar />
			<Header/>
			<Chartboard1 />
			<Chartboard2 />
			<Footer />
		</>
	)
}