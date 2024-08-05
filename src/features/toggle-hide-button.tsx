import { Puzzle } from '@/model/puzzle';
import { useEffect, useReducer, useState } from 'react';

import { sendToBackground } from '@plasmohq/messaging';

export const ToggleHideButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const send = async (value: boolean) => {
      console.log(`Setting toggle value: ${value}`);
      const resp = await sendToBackground({
        name: 'toggle',
        body: {
          isVisible: value
        },
        extensionId: 'fdjlkbnlhlaofbgnepfbnecdokmkhmel' // find this in chrome's extension manager
      });

      console.log(resp);
    };
    send(!isVisible);
  }, [isVisible]);

  return (
    <button
      onClick={() => setIsVisible(!isVisible)}
      type='button'
      className='plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
      plasmo-shadow-lg hover:plasmo-shadow-md
      active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900'>
      Visibility Toggle:
      <span className='plasmo-inline-flex plasmo-items-center plasmo-justify-center plasmo-w-8 plasmo-h-4 plasmo-ml-2 plasmo-text-xs plasmo-font-semibold plasmo-rounded-full'>
        {isVisible ? 'ON' : 'OFF'}
      </span>
    </button>
  );
};
