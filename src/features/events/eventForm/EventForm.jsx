import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, FormField, Header, Segment } from 'semantic-ui-react';

const EventForm = ({
	setFormOpen,
	setEvents,
	createEvent,
	selectedEvent,
	updateEvent,
}) => {
	const intialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	};

	const [values, setValues] = useState(intialValues);

	function handleFormSubmit() {
		selectedEvent
			? updateEvent({ ...selectedEvent, ...values })
			: createEvent({
					...values,
					id: cuid(),
					hostedBy: 'Bob',
					attendees: [],
					hostPhotoURL: '/assets/user.png',
			  });
		setFormOpen(false);
	}

	function handleInputChange(e) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}

	return (
		<Segment clearing>
			<Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
			<Form onSubmit={handleFormSubmit}>
				<FormField>
					<input
						type='text'
						placeholder='Event title'
						value={values.title}
						name='title'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<FormField>
					<input
						type='text'
						placeholder='Category'
						value={values.category}
						name='category'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<FormField>
					<input
						type='text'
						placeholder='Description'
						value={values.description}
						name='description'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<FormField>
					<input
						type='text'
						placeholder='City'
						value={values.city}
						name='city'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<FormField>
					<input
						type='text'
						placeholder='Venue'
						value={values.venue}
						name='venue'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<FormField>
					<input
						type='date'
						placeholder='date'
						value={values.date}
						name='date'
						onChange={(e) => handleInputChange(e)}
					/>
				</FormField>
				<Button type='submit' floated='right' positive content='Submit' />
				<Button
					onClick={() => setFormOpen(false)}
					type='submit'
					floated='right'
					content='Cancel'
				/>
			</Form>
		</Segment>
	);
};

export default EventForm;
