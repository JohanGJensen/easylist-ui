import React from 'react';
// import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { Text, Group } from '@mantine/core';

// types
import { ISpace } from '../../interfaces';

// styling
import ButtonGroup from './ButtonGroup';

interface IProps {
	space: ISpace;
}

const ItemList: React.FC<IProps> = (props) => {
	const { items } = props.space;

	return (
		<>
			{items && items.map((item, i) => {
				return (
					<Group key={`item-${i}`} position={'apart'}>
						<Text size={'lg'}>{item.name}</Text>
						<ButtonGroup space={props.space} item={item} />
					</Group>
				)
			})}
		</>
	);
}

export default ItemList;
