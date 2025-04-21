
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { List } from "lucide-react";

interface WordCount {
  word: string;
  count: number;
}

interface TopWordFrequencyPanelProps {
  words: WordCount[];
  onRowClick?: (word: string) => void;
}

const TopWordFrequencyPanel: React.FC<TopWordFrequencyPanelProps> = ({ words, onRowClick }) => {
  return (
    <Card className="glass shadow-lg border border-indigo-200 dark:border-indigo-600 max-h-[60vh] overflow-y-auto p-0">
      <CardHeader className="flex items-center gap-2 pb-2 sticky top-0 bg-card/90 z-10">
        <List className="text-indigo-600 dark:text-indigo-400" size={18} />
        <CardTitle className="text-sm font-bold font-hindi">🔁 सबसे अधिक उपयोग हुए शब्द</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul>
          {words.slice(0, 25).map((item, idx) => (
            <li
              key={item.word}
              className={`flex justify-between items-center px-4 py-2 border-b border-gray-100 dark:border-gray-700 hover:bg-indigo-50/80 dark:hover:bg-indigo-900/30 cursor-pointer font-hindi text-sm transition-colors`}
              onClick={() => onRowClick?.(item.word)}
              tabIndex={0}
              role="button"
            >
              <span className="flex-1 truncate">{idx + 1}. {item.word}</span>
              <span className="ml-2 font-semibold text-indigo-700 dark:text-indigo-300">{item.count} बार</span>
            </li>
          ))}
          {words.length === 0 && (
            <li className="px-4 py-8 text-center text-gray-400 text-xs font-hindi">शब्द आवृत्ति यहाँ प्रदर्शित होगी...</li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopWordFrequencyPanel;
