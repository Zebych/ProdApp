import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/SkeletonRedesigned',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    height: 200,
    width: 500,
    border: '20px',
};
Normal.decorators = [
    (Story) => (
        <div style={{ padding: 100 }}>
            <Story />
        </div>
    ),
];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    height: 100,
    width: 100,
};
Circle.decorators = [
    (Story) => (
        <div style={{ padding: 100 }}>
            <Story />
        </div>
    ),
];

export const NormalDark = Template.bind({});
NormalDark.args = {
    height: 200,
    width: '100%',
};
NormalDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    height: 100,
    width: 100,
};
CircleDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalOrange = Template.bind({});
NormalOrange.args = {
    height: 200,
    width: 500,
};
NormalOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    border: '50%',
    height: 100,
    width: 100,
};
CircleOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
