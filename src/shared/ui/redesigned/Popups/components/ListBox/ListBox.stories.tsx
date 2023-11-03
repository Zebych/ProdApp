import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBoxRedesigned',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'Normal', value: '123' },
        { content: 'Normal', value: '123' },
    ],
};
export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: 'TopLeft', value: '123' },
        { content: 'TopLeft', value: '123' },
    ],
};
export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'TopRight', value: '123' },
        { content: 'TopRight', value: '123' },
    ],
};
export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'BotLeft', value: '123' },
        { content: 'BotLeft', value: '123' },
    ],
};
export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'BotRight', value: '123' },
        { content: 'BotRight', value: '123' },
    ],
};
