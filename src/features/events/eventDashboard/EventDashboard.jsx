import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({
	formOpen,
	setFormOpen,
	selectEvent,
	selectedEvent,
}) => {
	const [events, setEvents] = useState(sampleData);

	function handleCreateEvent(event) {
		setEvents([...events, event]);
	}

	function handleUpdateEvent(updatedEvent) {
		setEvents(
			events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
		);
		selectEvent(null);
		setFormOpen(false);
	}

	function handleDeleteEvent(eventId) {
		setEvents(events.filter((evt) => evt.id !== eventId));
	}

	return (
		<Grid>
			<Grid.Column width={10}>
				<EventList
					events={events}
					selectEvent={selectEvent}
					deleteEvent={handleDeleteEvent}
				/>
			</Grid.Column>

			<Grid.Column width={6}>
				{formOpen && (
					<EventForm
						setFormOpen={setFormOpen}
						setEvents={setEvents}
						createEvent={handleCreateEvent}
						selectedEvent={selectedEvent}
						key={selectedEvent ? selectedEvent.id : null}
						updateEvent={handleUpdateEvent}
					/>
				)}
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard;
