
//Props for the TextInput component, text area 
export interface TextInputProps {
  value: string;
  onTextChange: (text: string) => void;
  placeholder?: string;
}

//Data calculated from the user input; this data is displayed 
//in the StatsDisplay Component 
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
  wordPrice:number; //in dollars
}

//Props for the StatsDisplay component (the box that shows the stats)
export interface StatsDisplayProps {
  //pulls the data the user is inputting 
    stats: TextStats;
    //shows reading time only after words have been written
  showReadingTime?: boolean;
}

//Props that provide limits for the TextStats
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}