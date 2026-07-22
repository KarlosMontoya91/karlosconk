import React, { createContext, useContext, useState, useEffect } from 'react';

export type ViewMode = 'professional' | 'commercial';

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ViewMode>(() => {
    try {
      const saved = sessionStorage.getItem('karlosmontoya_view_mode_v1');
      if (saved === 'professional' || saved === 'commercial') {
        return saved as ViewMode;
      }
    } catch (e) {
      console.error("Error accessing sessionStorage:", e);
    }
    return 'professional'; // Default mode
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('karlosmontoya_view_mode_v1', mode);
    } catch (e) {
      console.error("Error setting sessionStorage:", e);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'professional' ? 'commercial' : 'professional'));
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
