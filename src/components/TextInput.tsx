
import React, { useState } from 'react';
import { countWords, countCharacters } from '../utils/hindiPunctuation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FiFileText, FiRefreshCw } from 'react-icons/fi';

interface TextInputProps {
  onPunctuate: (text: string) => void;
  isProcessing: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onPunctuate, isProcessing }) => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePunctuate = () => {
    onPunctuate(text);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 font-hindi">मूल हिंदी पाठ</h2>
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="यहां अपना हिंदी पाठ डालें..."
          className="min-h-[300px] p-4 text-base leading-relaxed font-hindi"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span><FiFileText className="inline mr-1" />{countWords(text)} शब्द</span>
          <span>|</span>
          <span>{countCharacters(text)} अक्षर</span>
        </div>
        <Button 
          onClick={handlePunctuate}
          disabled={isProcessing || !text.trim()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-hindi flex items-center space-x-2"
        >
          {isProcessing ? (
            <>
              <FiRefreshCw className="animate-spin" />
              <span>प्रोसेसिंग...</span>
            </>
          ) : (
            <span>विराम चिह्न जोड़ें</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TextInput;
