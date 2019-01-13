import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 500px;
	height: 600px;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
		0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	&:first-child {
		position: relative !important;
		height: 600px !important;
	}
	@media (max-width: 700px) {
		width: 100%;
	}
`;

class MapWrapper extends React.Component {
	state = {
		marker: {},
		showingWindow: false,
	};

	markerClick = (props, marker, e) => {
		this.setState({
			marker: marker,
			showingWindow: true,
		});
	};

	render() {
		return (
			<Wrapper>
				<Map
					style={{ width: '100%', height: '100%', flex: 1, position: 'relative' }}
					google={this.props.google}
					initialCenter={{ lat: 47.709727, lng: -122.129865 }}
					zoom={12}
				>
					<Marker
						position={{ lat: 47.709727, lng: -122.129865 }}
						name='Eastside Swim School'
						onClick={this.markerClick}
					/>
					<InfoWindow visible={this.state.showingWindow} marker={this.state.marker}>
						<Paper>
							<Typography variant='h5' component='h4'>
								Willows Prep Pool
							</Typography>
							<Typography component='p'>
								12280 Redmond-Woodinville Rd. NE<br />
								Redmond, WA 98052
							</Typography>
						</Paper>
					</InfoWindow>
				</Map>
			</Wrapper>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapWrapper);
