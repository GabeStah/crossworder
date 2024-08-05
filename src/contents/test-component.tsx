import type { PlasmoCSConfig } from 'plasmo';

import { sendToBackground } from '@plasmohq/messaging';

export const config: PlasmoCSConfig = {
  matches: ['https://www.nytimes.com/crosswords/game/*'],
  world: 'MAIN'
};

const resp = await sendToBackground({
  name: 'ping',
  body: {
    id: 123
  },
  extensionId: 'fdjlkbnlhlaofbgnepfbnecdokmkhmel' // find this in chrome's extension manager
});

console.log(resp);
