
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Table as TableIcon } from "lucide-react";

interface WordCount {
  word: string;
  count: number;
}

interface TopWordsBoxProps {
  words: WordCount[];
}

const TopWordsBox: React.FC<TopWordsBoxProps> = ({ words }) => {
  return (
    <Card className="glass shadow-lg border border-indigo-200 dark:border-indigo-600 max-h-[35vh] overflow-y-auto">
      <CardHeader className="flex flex-row items-center gap-2 pb-2 sticky top-0 bg-inherit z-10">
        <TableIcon className="text-indigo-600 dark:text-indigo-400" size={20} />
        <CardTitle className="text-sm font-bold font-hindi">🔁 सबसे ज़्यादा बार आने वाले शब्द (शीर्ष 25)</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {words.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400 text-xs font-hindi py-2 text-center">शब्द आवृत्ति यहाँ दिखेगी...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8 text-center text-xs font-hindi">#</TableHead>
                <TableHead className="font-hindi text-xs">शब्द</TableHead>
                <TableHead className="font-hindi text-xs">बार</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {words.map((item, idx) => (
                <TableRow key={item.word}>
                  <TableCell className="text-center font-bold text-xs">{idx + 1}</TableCell>
                  <TableCell className="font-hindi text-xs">{item.word}</TableCell>
                  <TableCell className="font-hindi text-xs">{item.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TopWordsBox;
