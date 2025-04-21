
import React, { useState, useEffect } from 'react';
import TextInput from '@/components/TextInput';
import TextOutput from '@/components/TextOutput';
import SearchReplace from '@/components/SearchReplace';
import ProgressBar from '@/components/ProgressBar';
import AppHeader from '@/components/AppHeader';
import { 
  punctuateHindi,
  addIntroOutro,
  highlightText,
  replaceText,
} from '@/utils/hindiPunctuation';

const Index: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [processedText, setProcessedText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [searchWord, setSearchWord] = useState<string>('');
  const [totalReplacements, setTotalReplacements] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to toggle dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Function to simulate processing with progress
  const processText = (text: string) => {
    setIsProcessing(true);
    setProgress(0);
    setInputText(text);
    
    // Simulate processing delay with progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        
        // Apply punctuation
        const punctuated = punctuateHindi(text);
        // Add intro and outro
        const withIntroOutro = addIntroOutro(punctuated);
        
        setProcessedText(withIntroOutro);
        setDisplayText(withIntroOutro);
        setIsProcessing(false);
        setSearchWord('');
        setTotalReplacements(0);
      }
    }, 100);
  };

  // Handle search
  const handleSearch = (search: string) => {
    if (!processedText) return;
    
    setSearchWord(search);
    setDisplayText(highlightText(processedText, search));
  };

  // Handle replace
  const handleReplace = (search: string, replace: string) => {
    if (!processedText) return;
    
    const newText = replaceText(processedText, search, replace);
    setProcessedText(newText);
    setDisplayText(newText);
    
    // Count replacements (simplified - just counting occurrences)
    const regex = new RegExp(search, 'gi');
    const matches = processedText.match(regex);
    const count = matches ? matches.length : 0;
    setTotalReplacements(count);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col`}>
      <AppHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {isProcessing && (
            <div className="mb-6">
              <ProgressBar progress={progress} />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <TextInput 
                onPunctuate={processText} 
                isProcessing={isProcessing} 
              />
              
              <TextOutput 
                text={inputText} 
                processedContent={displayText} 
              />
            </div>
            
            <div className="lg:col-span-1">
              <SearchReplace 
                onSearch={handleSearch}
                onReplace={handleReplace}
                disabled={!processedText || isProcessing}
                totalReplacements={totalReplacements}
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border-t">
        <p className="font-hindi">हिंदी सम्पूर्ण लेखन साथी © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
