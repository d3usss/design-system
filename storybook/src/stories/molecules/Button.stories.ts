import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import { UiButton } from "ui-components";

const meta: Meta<UiButton> = {
  title: "Molecules/Button",
  component: "UiButton",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
  },
  render: () => html`<ui-button name="Primary Button"></ui-button>`,
};

export default meta;
type Story = StoryObj<UiButton>;

export const Primary: Story = {
  args: {
    name: "Primary Button",
  },
};
