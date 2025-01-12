import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../src/app/style/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: withRouter,
};

export default preview;
