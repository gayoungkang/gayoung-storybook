import Button, { ButtonProps } from "@components/Button/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  variant: "contained",
  size: "large",
  type: "button",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};

export const Contained = Template.bind({});
Contained.args = {
  label: "Contained Button",
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Button",
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  label: "Medium Button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  size: "large",
};
