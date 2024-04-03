import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

// Define Meta information for the Title component
const meta: Meta = {
  title: 'Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof meta>;

const titleStyles = {
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
};

const heading1Styles = {
  ...titleStyles,
  fontSize: '2rem',
  fontWeight: 'bold',
};

const heading2Styles = {
  ...titleStyles,
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const heading3Styles = {
  ...titleStyles,
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

// Define each story using StoryObj
export const Heading1: Story = {
  args: {
    level: 'h1',
    children: 'Heading Level 1',
    style: heading1Styles,
  },
};

export const Heading2: Story = {
  args: {
    level: 'h2',
    children: 'Heading Level 2',
    style: heading2Styles,
  },
};

export const Heading3: Story = {
  args: {
    level: 'h3',
    children: 'Heading Level 3',
    style: heading3Styles,
  },
};
