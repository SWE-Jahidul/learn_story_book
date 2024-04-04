import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';


const meta: Meta = {
  title: 'Heading',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 'h1',
    children: 'Heading Level 1',
  },
};

export const Heading2: Story = {
  args: {
    level: 'h2',
    children: 'Heading Level 2',
  },
};

export const Heading3: Story = {
  args: {
    level: 'h3',
    children: 'Heading Level 3',
  },
};

export const Heading4: Story = {
  args: {
    level: 'h4',
    children: 'Heading Level 4',
  }
};

export const Heading5: Story = {
  args: {
    level: 'h5',
    children: 'Heading Level 5',
  }
}

