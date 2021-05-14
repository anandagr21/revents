import React from 'react';
import { Button, Form, FormField, Header, Segment } from 'semantic-ui-react';

const EventForm = ({ setFormOpen }) => {
	return (
		<Segment clearing>
			<Header content='Create new event' />
			<Form>
				<FormField>
					<input type='text' placeholder='Event title' />
				</FormField>
				<FormField>
					<input type='text' placeholder='Category' />
				</FormField>
				<FormField>
					<input type='text' placeholder='Description' />
				</FormField>
				<FormField>
					<input type='text' placeholder='City' />
				</FormField>
				<FormField>
					<input type='text' placeholder='Venue' />
				</FormField>
				<FormField>
					<input type='date' placeholder='date' />
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
