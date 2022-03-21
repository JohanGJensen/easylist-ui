import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import { Checkbox, ActionIcon, Group } from '@mantine/core';

// styling
import { Trash } from 'tabler-icons-react';

interface ISpaceItem {
	_id: string;
	complete: string;
	name: string;
}

interface IProps {
	spaceId: string;
	item: ISpaceItem;
}

const ItemList: React.FC<IProps> = (props) => {
	const [complete, setComplete] = useState<boolean>(false);
	const { spaceId, item } = props;

	useEffect(() => {
		handleChecked(item.complete);
	}, []);

	const handleChecked = (complete) => {
		if (typeof complete === 'string') {
			setComplete((complete === 'true') ? true : false);
		}

		if (typeof complete === 'boolean') {
			setComplete(complete);
		}
	}

	const handleChange = () => {
		const params = new URLSearchParams();
		const newComplete = !complete;

		params.append('_id', item._id);
		params.append('name', item.name);
		params.append('complete', newComplete.toString());

		setComplete(newComplete);

		axios.post(`https://easy-list.herokuapp.com/items/update/${spaceId}/${item._id}`, params)
			.catch((error) => console.error(error));

	}

	return (
		<Group direction={'row'} spacing={'xs'}>
			<Checkbox onChange={handleChange} checked={complete} color={'teal'} />
			<ActionIcon size={'sm'} color={'red'} children={<Trash />} />
		</Group>
	);
}

export default ItemList;
