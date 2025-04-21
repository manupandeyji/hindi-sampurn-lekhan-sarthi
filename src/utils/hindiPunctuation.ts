
// Hindi Punctuation Utility Functions

// List of hindi intro messages
export const hindiIntros = [
  "आपका स्वागत है इस ज्ञानवर्धक लेख में।",
  "हिंदी भाषा की सुंदरता को महसूस करें।",
  "इस महत्वपूर्ण जानकारी के साथ आपका दिन शुभ हो।",
  "आज हम एक रोचक विषय पर चर्चा करेंगे।",
  "प्रिय पाठक, आपका हार्दिक अभिनंदन!",
  "आपके समय के लिए धन्यवाद, आइए शुरू करें।",
  "हिंदी साहित्य की इस यात्रा में आपका स्वागत है।",
  "ज्ञान के इस सागर में आपका स्वागत है।",
  "आज हम जानेंगे कुछ विशेष बातें।",
  "इस सुंदर भाषा के माध्यम से हम संवाद करेंगे।"
];

// List of hindi outro messages
export const hindiOutros = [
  "पढ़ने के लिए धन्यवाद! आशा है कि जानकारी उपयोगी रही होगी।",
  "आशा है कि आपको यह जानकारी पसंद आई होगी।",
  "अपना कीमती समय देने के लिए आपका हार्दिक आभार।",
  "आपके सुझावों का हमेशा स्वागत है। धन्यवाद!",
  "हमारे साथ जुड़े रहने के लिए आपका धन्यवाद।",
  "आशा है, यह लेख आपके लिए उपयोगी साबित हुआ होगा।",
  "आपकी प्रतिक्रिया का इंतज़ार रहेगा। शुभकामनाएँ!",
  "इस यात्रा में हमारा साथ देने के लिए धन्यवाद।",
  "हम आपकी प्रगति में सहायक बनना चाहते हैं। धन्यवाद!",
  "आप हमारे लिए महत्वपूर्ण हैं। अपना ख्याल रखिए।"
];

// Function to get a random element from array
export const getRandomElement = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

// Function to count words in a Hindi text
export const countWords = (text: string): number => {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

// Function to count characters in a text
export const countCharacters = (text: string): number => {
  return text ? text.length : 0;
};

// Basic Hindi punctuation function (simplified version without ML model)
export const punctuateHindi = (text: string): string => {
  if (!text) return "";
  
  // Split the text into sentences (based on basic patterns)
  let sentences = text.split(/(\s+[।\?\!]|\s+और\s+|\s+लेकिन\s+|\s+परंतु\s+|\s+किंतु\s+|\s+तो\s+)/g);
  
  // Process each sentence to add punctuation
  let result = "";
  
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();
    
    if (!sentence) continue;
    
    // Check if the sentence is already a connector or punctuation
    if (/^(और|लेकिन|परंतु|किंतु|तो|[।\?\!])$/g.test(sentence)) {
      if (sentence === "और") {
        result += " और ";
      } else if (sentence === "लेकिन" || sentence === "परंतु" || sentence === "किंतु") {
        result += ", " + sentence + " ";
      } else if (sentence === "तो") {
        result += ", तो ";
      } else {
        result += sentence + " ";
      }
      continue;
    }
    
    // Randomly add commas at some places (simplified logic)
    if (sentence.length > 15) {
      const words = sentence.split(/\s+/);
      if (words.length > 5) {
        // Add comma after 30-60% of the sentence
        const commaPosition = Math.floor(words.length * (0.3 + Math.random() * 0.3));
        words[commaPosition] = words[commaPosition] + ",";
        sentence = words.join(" ");
      }
    }
    
    // Add question mark for sentences with question words
    if (/क्या|कौन|कब|कहाँ|कैसे|क्यों/i.test(sentence) && !sentence.endsWith("?")) {
      sentence += "?";
    } 
    // Add exclamation for sentences with exclamation words
    else if (/वाह|अरे|ओह|हे भगवान|बहुत अच्छा|शाबाश/i.test(sentence) && !sentence.endsWith("!")) {
      sentence += "!";
    } 
    // Add full stop for regular sentences
    else if (!sentence.endsWith("।") && !sentence.endsWith("?") && !sentence.endsWith("!")) {
      sentence += "।";
    }
    
    // Add the processed sentence to the result
    result += sentence + " ";
  }
  
  // Add quotation marks to direct speech (simplified)
  result = result.replace(/(\s|^)(कहा|बोला|बताया)(\s+कि\s+)([^।]+[।\?\!])/gi, '$1$2$3"$4"');
  
  // Clean up and return
  return result.trim();
};

// Function to add the intro and outro
export const addIntroOutro = (text: string): string => {
  const intro = getRandomElement(hindiIntros);
  const outro = getRandomElement(hindiOutros);
  
  return `${intro}\n\n${text}\n\n${outro}`;
};

// Function to highlight text
export const highlightText = (text: string, searchWord: string): string => {
  if (!searchWord || !text) return text;
  
  const regex = new RegExp(`(${searchWord})`, 'gi');
  return text.replace(regex, '<span class="bg-yellow-200 dark:bg-yellow-700">$1</span>');
};

// Function to replace text
export const replaceText = (text: string, searchWord: string, replaceWord: string): string => {
  if (!searchWord || !text) return text;
  
  const regex = new RegExp(searchWord, 'gi');
  return text.replace(regex, replaceWord);
};
