import React from 'react';

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
			{items && items.map((item) => {
				return (
					<Group key={`space-${props.space._id}-item-${item._id}`} position={'apart'}>
						<Text size={'lg'}>{item.name}</Text>
						<ButtonGroup space={props.space} item={item} />
					</Group>
				)
			})}
		</>
	);
}

export default ItemList;
