import React from 'react';
import Layout from '../components/Layout';

import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import Instructors from '../components/Instructors';
import Testimonial from '../components/Testimonials';

const IndexPage = () => (
	<Layout>
		<Jumbotron />
		<Classes />
		<Instructors />
		<Testimonial />
	</Layout>
);

export default IndexPage;
