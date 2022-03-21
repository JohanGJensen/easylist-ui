import React from 'react';

// components
import { Checkbox, Text, ActionIcon, Group } from '@mantine/core';

// styling
import { Trash } from 'tabler-icons-react';

interface ISpaceItem {
	id: string;
	complete: string;
	name: string;
}

interface IProps {
	items: ISpaceItem[];
}

const ItemList: React.FC<IProps> = (props) => {
	const { items } = props;

	return (
		<>
			{items && items.map((it) => {
				return (
					<Group position={'apart'}>
						<Text size={'lg'}>{it.name}</Text>
						<Group direction={'row'} spacing={'xs'}>
							<Checkbox checked={true} color={'teal'} />
							<ActionIcon size={'sm'} color={'red'} children={<Trash />} />
						</Group>
					</Group>
				)
			})}
		</>
	);
}

export default ItemList;
