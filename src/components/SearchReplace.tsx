
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FiSearch, FiRefreshCw } from 'react-icons/fi';

interface SearchReplaceProps {
  onSearch: (search: string) => void;
  onReplace: (search: string, replace: string) => void;
  disabled: boolean;
  totalReplacements: number;
}

const SearchReplace: React.FC<SearchReplaceProps> = ({ 
  onSearch, 
  onReplace, 
  disabled,
  totalReplacements 
}) => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [replaceWord, setReplaceWord] = useState<string>('');

  const handleSearch = () => {
    if (searchWord.trim()) {
      onSearch(searchWord.trim());
    }
  };

  const handleReplace = () => {
    if (searchWord.trim() && replaceWord.trim()) {
      onReplace(searchWord.trim(), replaceWord.trim());
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md border p-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 font-hindi">शब्द खोज और बदलें</h2>
      
      <div className="space-y-3">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 font-hindi">खोजें</label>
          <div className="flex space-x-2">
            <Input
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="खोजने के लिए शब्द..."
              className="font-hindi"
              disabled={disabled}
            />
            <Button 
              onClick={handleSearch}
              disabled={disabled || !searchWord.trim()}
              variant="outline"
              className="font-hindi"
            >
              <FiSearch />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 font-hindi">बदलें</label>
          <Input
            value={replaceWord}
            onChange={(e) => setReplaceWord(e.target.value)}
            placeholder="बदलने के लिए शब्द..."
            className="font-hindi"
            disabled={disabled}
          />
        </div>

        <Button 
          onClick={handleReplace}
          disabled={disabled || !searchWord.trim() || !replaceWord.trim()}
          className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-hindi"
        >
          सभी बदलें
        </Button>

        {totalReplacements > 0 && (
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-hindi">
            {totalReplacements} परिवर्तन किए गए
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchReplace;
