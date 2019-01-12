import React from 'react';
import Layout from '../components/Layout';

import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import Instructors from '../components/Instructors';
import Testimonial from '../components/Testimonials';
import Announcement from '../components/Announcement'

class IndexPage extends React.Component {
	
	render() {
		return (
			<Layout>
				<Jumbotron />
				<Classes />
				<Instructors />
				<Testimonial />
				<Announcement />
			</Layout>
		);
	}
}

export default IndexPage;
