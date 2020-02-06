import * as React from 'react'
import Label from './Label'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    info: { inline: true },
  },
}

export const LabelComponent = () => (
  <Label
    text={text('Label', 'Hello Storybook')}
    color={text('Color', '#000')}
  />
)
