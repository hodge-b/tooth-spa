import { cn } from "@/lib/utils";
import { TimePickerProps } from "./TimePicker.types";

const TimePicker = ({
  className,
  selected,
  timeRange,
  onSelected,
}: TimePickerProps) => {
  const startTime = Number(timeRange[0]);
  const endTime = Number(timeRange[1]);

  const options = [];
  for (let index = startTime; index < endTime; index++) {
    if (index > 12) {
      options.push(`${index - 12}:00 PM`);
    } else {
      options.push(`${index}:00 AM`);
    }
  }

  const optionElements = options.map((item, index) => (
    <option key={`${item}-${index}`} value={item}>
      {item}
    </option>
  ));

  return (
    <select
      className={cn(
        "border-x-8 border-transparent bg-white p-2 shadow rounded-md text-sm",
        timeRange.length === 0 && "bg-slate-200",
        className
      )}
      disabled={timeRange.length === 0}
      value={selected}
      onChange={onSelected}
    >
      {optionElements}
    </select>
  );
};

export default TimePicker;

// TODO: May use this in the future.
// const getOptionIndex = (range: string[], increment: TimeIncrements) => {
//   let index = 0;
//   switch (increment) {
//     case "15":
//       return (Number(range[1]) - Number(range[0])) * 4;
//     case "30":
//       return (Number(range[1]) - Number(range[0])) * 2;
//     default:
//       return Number(range[1]) - Number(range[0]);
//   }
// };
