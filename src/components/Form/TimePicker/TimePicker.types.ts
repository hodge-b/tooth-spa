export type TimeIncrements = "15" | "30" | "none";

export interface TimePickerProps {
  className?: string;
  selected: string;
  onSelected: () => void;
  timeRange: string[];
  increments?: TimeIncrements;
  disabled?: boolean;
}
