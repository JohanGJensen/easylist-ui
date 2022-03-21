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

interface IProps {
	spaceId: string;
	items: ISpaceItem[];
}

const ItemList: React.FC<IProps> = (props) => {
	const { spaceId, items } = props;

	return (
		<>
			{items && items.map((item, i) => {
				console.log(spaceId, item)
				return (
					<Group key={`item-${i}`} position={'apart'}>
						<Text size={'lg'}>{item.name}</Text>
						<ButtonGroup spaceId={spaceId} item={item} />
					</Group>
				)
			})}
		</>
	);
}

export default ItemList;
