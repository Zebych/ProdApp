import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Popups/DropdownRedesigned',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open list</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open list</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
    trigger: <Button>Open list</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Light.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const Orange = Template.bind({});
Orange.args = {
    trigger: <Button>Open list</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
