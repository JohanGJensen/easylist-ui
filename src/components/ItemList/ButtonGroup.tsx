import React, { useState, useEffect } from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { Checkbox, ActionIcon, Group } from '@mantine/core';

// api
import { postItemUpdate, deleteItem } from '../../api';

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
	const { handleUpdateItem, handleDeleteItem } = React.useContext(SpaceContext);
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

	const onChange = () => {
		const params = new URLSearchParams();
		const newComplete = !complete;

		params.append('_id', item._id);
		params.append('name', item.name);
		params.append('complete', newComplete.toString());

		setComplete(newComplete);

		postItemUpdate(space._id, item._id, params)
			.then((res) => handleUpdateItem(space._id, res.data.result))
			.catch((error) => console.error(error));
	}

	const onDelete = () => {
		deleteItem(space._id, item._id)
			.then(() => handleDeleteItem(space, item))
			.catch((error) => console.error(error));
	};

	return (
		<Group direction={'row'} spacing={'xs'}>
			<Checkbox onChange={onChange} checked={complete} color={'teal'} />
			<ActionIcon onClick={onDelete} size={'sm'} color={'red'} children={<Trash />} />
		</Group>
	);
}

export default ItemList;
