import Badge from '.';

export default {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Positive = {
  args: {
    children: 'positive',
    state: 'positive'
  },
};

export const Negative = {
  args: {
    children: 'negative',
    state: 'negative'
  },
};

export const Neutral = {
  args: {
    children: 'neutral',
    state: 'neutral'
  },
};

export const Warning = {
  args: {
    children: 'warning',
    state: 'warning'
  },
};
