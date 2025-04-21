
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

interface AppHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="py-4 px-6 border-b">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
            ह
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-hindi hidden sm:block">हिंदी सम्पूर्ण लेखन साथी</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleDarkMode}
          className="rounded-full"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
