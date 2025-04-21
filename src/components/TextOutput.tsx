
import React from 'react';
import { FiCopy, FiFileText, FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { countWords, countCharacters } from '../utils/hindiPunctuation';

interface TextOutputProps {
  text: string;
  processedContent: string;
}

const TextOutput: React.FC<TextOutputProps> = ({ text, processedContent }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(processedContent);
    // You could add a toast notification here
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([processedContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'hindi-punctuated-text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 font-hindi">परिणाम</h2>
        {processedContent ? (
          <div 
            className="min-h-[300px] p-4 border rounded-md bg-white dark:bg-gray-800 text-base leading-relaxed font-hindi overflow-auto"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        ) : (
          <div className="min-h-[300px] p-4 border rounded-md bg-white dark:bg-gray-800 text-base text-gray-400 dark:text-gray-500 flex items-center justify-center font-hindi">
            विराम चिह्न वाला पाठ यहां दिखाई देगा...
          </div>
        )}
      </div>

      {processedContent && (
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span><FiFileText className="inline mr-1" />{countWords(text)} शब्द</span>
            <span>|</span>
            <span>{countCharacters(text)} अक्षर</span>
          </div>
          <div className="flex space-x-2">
            <Button 
              onClick={handleCopy} 
              variant="outline"
              className="flex items-center space-x-2"
            >
              <FiCopy />
              <span>कॉपी करें</span>
            </Button>
            <Button 
              onClick={handleDownload}
              variant="outline" 
              className="flex items-center space-x-2"
            >
              <FiDownload />
              <span>डाउनलोड</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextOutput;
