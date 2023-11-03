import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/ButtonRedesigned',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outline',
};

OutlineDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];
export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    variant: 'outline',
};

OutlineLight.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const OutlineOrange = Template.bind({});
OutlineOrange.args = {
    children: 'Text',
    variant: 'outline',
};

OutlineOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
