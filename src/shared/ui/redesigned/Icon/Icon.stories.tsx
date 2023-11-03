import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import { Icon } from './Icon';

export default {
    title: 'shared/IconRedesigned',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    clickable: true,
    onClick: action('onSvgClick'),
    Svg: CopyIconNew,
};
