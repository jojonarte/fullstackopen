import React from 'react';

const Part = ({ key, name, exercises }) => (
	<p key={key}>
		{name} {exercises}
	</p>
);
export const Content = ({ parts }) =>
	parts.map((exercise) => <Part {...exercise} />);
