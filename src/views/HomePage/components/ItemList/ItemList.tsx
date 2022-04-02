import React from 'react';

// components
import { Text } from '@mantine/core';
import Item from './Item';

// types
import { ISpace } from '../../../../interfaces';

// styling

interface IProps {
	space: ISpace;
}

const ItemList: React.FC<IProps> = (props) => {
	const { items } = props.space;

	return (
		<>
			{items.length ? items.map((item) => {
				return (
					<Item
						key={`space-${props.space._id}-item-${item._id}`}
						space={props.space}
						item={item}
					/>
				)
			})
				:
				<Text size={'sm'} color={'grey'}>{'no items added'}</Text>}
		</>
	);
}

export default ItemList;
