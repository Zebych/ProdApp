import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Drawer } from './Drawer';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { DisplayText } from '@/shared/ui/redesigned/Text';

export default {
    title: 'shared/DrawerRedesigned',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    children: <DisplayText title="Выдвижная панель" text="Свайпается вниз" />,
    isOpen: true,
    onClose: action('Close click'),
};

Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
    children: <DisplayText title="Выдвижная панель" text="Свайпается вниз" />,
    isOpen: true,
    onClose: action('Close click'),
};

Light.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const Orange = Template.bind({});
Orange.args = {
    children: <DisplayText title="Выдвижная панель" text="Свайпается вниз" />,
    isOpen: true,
    onClose: action('Close click'),
};

Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
