import React from 'react';

const FormatDate = ({ ...props }) => {
	const { date } = props;

	return date.toLocaleDateString();
};

export default FormatDate;
