import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { TextComponent } from '@/shared/ui/deprecated/Text/TextComponent';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <TextComponent title="test" text="text text" />,
};
