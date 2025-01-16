export const getWorkingHours = (text: string) => {
  const [startTime, endTime] = text.split("-");

  // Convert time to 24 hours.
  const convertedStartTime = startTime.includes("AM")
    ? startTime.split("AM")[0]
    : Number(startTime.split("PM")[0]) < 12
    ? Number(startTime.split("PM")[0]) + 12
    : startTime.split("PM")[0];

  const convertedEndTime = endTime.includes("AM")
    ? endTime.split("AM")[0]
    : Number(endTime.split("PM")[0]) < 12
    ? Number(endTime.split("PM")[0]) + 12
    : endTime.split("PM")[0];

  return [convertedStartTime.toString(), convertedEndTime.toString()];
};
