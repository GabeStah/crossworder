export type Plugin = {
  name: string;
  description: string;
  setBoardSize: (size: 'full' | 'large' | 'default') => void;
  hideHeader: () => void;
  showHeader: () => void;
  toggleHeader: () => void;
  hideFooter: () => void;
  showFooter: () => void;
  toggleFooter: () => void;
  hideClueList: () => void;
  showClueList: () => void;
  toggleClueList: () => void;
};
