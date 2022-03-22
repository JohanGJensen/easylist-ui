import React, { useState, useEffect } from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { Checkbox, ActionIcon, Group } from '@mantine/core';

// api
import { postNewItem, deleteItem } from '../../api';

// styling
import { Trash } from 'tabler-icons-react';

interface ISpaceItem {
	_id: string;
	complete: string;
	name: string;
}

interface ISpace {
	_id: string;
	name: string;
	user: string;
	items: ISpaceItem[];
}

interface IProps {
	space: ISpace;
	item: ISpaceItem;
}

const ItemList: React.FC<IProps> = (props) => {
	const { data, handleData } = React.useContext(SpaceContext);
	const [complete, setComplete] = useState<boolean>(false);
	const { space, item } = props;

	useEffect(() => {
		parseBoolean(item.complete);
	}, []);

	const parseBoolean = (complete) => {
		if (typeof complete === 'string') {
			setComplete((complete === 'true') ? true : false);
		}

		if (typeof complete === 'boolean') {
			setComplete(complete);
		}
	};

	const handleChange = () => {
		const params = new URLSearchParams();
		const newComplete = !complete;

		params.append('_id', item._id);
		params.append('name', item.name);
		params.append('complete', newComplete.toString());

		setComplete(newComplete);

		postNewItem(space._id, item._id, params)
			.catch((error) => console.error(error));
	}

	const handleDelete = () => {
		const newItems = space.items.filter((sItem) => {
			return sItem._id !== item._id;
		});
		const newData = data.map((dataSpace) => {
			if (dataSpace._id === space._id) {
				dataSpace.items = newItems;
			}

			return dataSpace;
		});

		deleteItem(space._id, item._id)
			.then(() => {
				handleData(newData);
			})
			.catch((error) => console.error(error));
	};

	return (
		<Group direction={'row'} spacing={'xs'}>
			<Checkbox onChange={handleChange} checked={complete} color={'teal'} />
			<ActionIcon onClick={handleDelete} size={'sm'} color={'red'} children={<Trash />} />
		</Group>
	);
}

export default ItemList;
