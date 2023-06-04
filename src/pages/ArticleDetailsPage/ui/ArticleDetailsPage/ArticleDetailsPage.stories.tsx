import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'слой/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
