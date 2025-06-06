/**
 * Formats an ISO date string into a readable format using localized short month names.
 *
 * Example output: "5 Okt 2025"
 *
 * @function formatDate
 * @param {string} isoDate - An ISO-formatted date string (e.g. "2025-10-05T12:34:56Z").
 * @returns {string} The formatted date in "D Mmm YYYY" format.
 */
export function formatDate(isoDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const date = new Date(isoDate);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
