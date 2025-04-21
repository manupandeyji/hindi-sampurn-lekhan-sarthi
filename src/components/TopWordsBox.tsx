
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
    <Card className="glass shadow-lg mb-4 border border-indigo-200 dark:border-indigo-600">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <TableIcon className="text-indigo-600 dark:text-indigo-400" size={20} />
        <CardTitle className="text-base font-bold font-hindi">🔁 सबसे ज़्यादा बार आने वाले शब्द</CardTitle>
      </CardHeader>
      <CardContent>
        {words.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400 text-sm font-hindi py-2">शब्द आवृत्ति यहाँ दिखेगी...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 text-center font-hindi">#</TableHead>
                <TableHead className="font-hindi">शब्द</TableHead>
                <TableHead className="font-hindi">बार</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {words.map((item, idx) => (
                <TableRow key={item.word}>
                  <TableCell className="text-center font-bold">{idx + 1}</TableCell>
                  <TableCell className="font-hindi">{item.word}</TableCell>
                  <TableCell className="font-hindi">{item.count}</TableCell>
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
