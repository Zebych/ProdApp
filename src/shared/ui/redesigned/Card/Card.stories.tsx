import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { DisplayText } from '@/shared/ui/redesigned/Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/CardRedesigned',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <DisplayText title="test" text="text text" />,
};
Light.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    children: <DisplayText title="test" text="text text" />,
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children: <DisplayText title="test" text="text text" />,
};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
