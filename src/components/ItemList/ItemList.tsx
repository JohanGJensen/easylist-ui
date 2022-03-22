import React from 'react';

// components
import { Text, Group } from '@mantine/core';

// styling
import ButtonGroup from './ButtonGroup';

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
}

const ItemList: React.FC<IProps> = (props) => {
	const { space } = props;

	return (
		<>
			{space.items && space.items.map((item, i) => {

				return (
					<Group key={`item-${i}`} position={'apart'}>
						<Text size={'lg'}>{item.name}</Text>
						<ButtonGroup space={space} item={item} />
					</Group>
				)
			})}
		</>
	);
}

export default ItemList;
