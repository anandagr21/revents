import React from 'react';
import { Image, ListItem } from 'semantic-ui-react';

const EventListAttendee = ({ attendee }) => {
	return (
		<ListItem>
			<Image size='mini' src={attendee.photoURL} circular />
		</ListItem>
	);
};

export default EventListAttendee;
