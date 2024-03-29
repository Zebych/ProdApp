import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../Input/Input';

export default {
    title: 'shared/InputRedesigned',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '321565',
};
