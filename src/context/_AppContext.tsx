import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  title: string;
  setTitle: (newTitle: string) => void;
  copyright: string;
  setCopyright: (newCopyright: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('xHomerOx Website Application');
  const [copyright, setCopyright] = useState('Copyright Otello Boz Maraldo - xHomerOx - All rights reserved.');

  return (
    <AppContext.Provider value={{ title, setTitle, copyright, setCopyright }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};