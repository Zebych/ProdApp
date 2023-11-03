import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/CodeRedesigned',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};
LightRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const OrangeRedesigned = Template.bind({});
OrangeRedesigned.args = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};
OrangeRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.ORANGE),
];
