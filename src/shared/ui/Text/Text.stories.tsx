import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProviders';
import { TextComponent, TextSize, TextTheme } from './TextComponent';

export default {
    title: 'shared/Text',
    component: TextComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (
    args,
) => <TextComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem',
    text: 'Description text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem',
    text: 'Description text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem',
    text: 'Description text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const sizeL = Template.bind({});
sizeL.args = {
    title: 'Title lorem',
    text: 'Description text',
    size: TextSize.L,
};

export const sizeM = Template.bind({});
sizeM.args = {
    title: 'Title lorem',
    text: 'Description text',
    size: TextSize.M,
};

export const sizeS = Template.bind({});
sizeS.args = {
    title: 'Title lorem',
    text: 'Description text',
    size: TextSize.S,
};
