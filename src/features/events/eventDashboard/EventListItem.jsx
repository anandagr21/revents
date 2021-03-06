import React from 'react';
import {
	Button,
	Icon,
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemHeader,
	ItemImage,
	List,
	Segment,
	SegmentGroup,
} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
	return (
		<SegmentGroup>
			<Segment>
				<ItemGroup>
					<Item>
						<ItemImage size='tiny' circular src={event.hostPhotoURL} />
						<ItemContent>
							<ItemHeader content={event.title} />
							<ItemDescription>Hoted by {event.hostedBy}</ItemDescription>
						</ItemContent>
					</Item>
				</ItemGroup>
			</Segment>
			<Segment>
				<span>
					<Icon name='clock' />
					{event.date}
					<Icon name='marker' />
					{event.venue}
				</span>
			</Segment>

			<Segment secondary>
				<List horizontal>
					{event.attendees.map((attendee) => (
						<EventListAttendee key={attendee.id} attendee={attendee} />
					))}
				</List>
			</Segment>

			<Segment clearing>
				<div>{event.description}</div>
				<Button
					onClick={() => deleteEvent(event.id)}
					color='red'
					floated='right'
					content='Delete'
				/>
				<Button
					onClick={() => selectEvent(event)}
					color='teal'
					floated='right'
					content='View'
				/>
			</Segment>
		</SegmentGroup>
	);
};

export default EventListItem;
