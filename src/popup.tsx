import { CountButton } from '@/features/count-button';

import { useMessage } from '@plasmohq/messaging/hook';

import '@/style.css';

import { SwitchForm } from '@/components/switch-form';
import { ToggleHideButton } from '@/features/toggle-hide-button';
import { useEffect } from 'react';

function IndexPopup() {
  useEffect(() => {
    console.log('Popup mounted');
    const element = document.getElementById('__next');
    console.log(element);
    if (element) {
      element.style.backgroundColor = 'red';
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-80'>
      <p>Popup</p>
      <CountButton />
      <ToggleHideButton />
      <SwitchForm />
    </div>
  );
}

export default IndexPopup;
