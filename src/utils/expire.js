export function hasDatePassed(dateTimeString) {
  // Parse the dateTimeString into a Date object
  const dateTime = new Date(dateTimeString);

  // Get the current date and time
  const now = new Date();

  // Compare the dates
  return now > dateTime;
}
