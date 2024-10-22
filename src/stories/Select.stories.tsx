import type { Meta, StoryObj } from "@storybook/react";

import { Select, type SelectOption } from "@app/common";

const options: SelectOption[] = [
  {
    id: 0,
    value: "first",
    label: "First",
  },
  {
    id: 1,
    value: "second",
    label: "Second",
  },
  {
    id: 2,
    value: "third",
    label: "Third",
    disabled: true,
  },
  {
    id: 3,
    value: "fourth",
    label: "Fourth",
  },
  {
    id: 4,
    value: "fifth",
    label: "Fifth",
  },
];

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { options, placeholder: "Select value" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    reset: "Reset value",
  },
};

export const PrimaryMultiple: Story = {
  args: {
    multiple: true,
  },
};
