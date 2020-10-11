import React from 'react';
export const Total = ({ parts }) => {
	const total = parts.reduce((acc, curr) => acc + curr.exercises, 0);
	return <p>Number of exercises {total}</p>;
};
