import Input from '.';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Text = {
  args: {
    placeholder: 'Digite um texto',
    type: 'text',
  },
};

export const Number = {
  args: {
    placeholder: 'Digite um número',
    type: 'number',
  },
};

export const Disabled = {
  args: {
    placeholder: 'Digite um texto',
    type: 'text',
    disabled: true
  },
};