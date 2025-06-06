/**
 * Calculates how much time has passed since a given ISO date.
 *
 * - Returns a human-readable string like "2h ago", "5d ago", or "Just now".
 * - Automatically adjusts to the appropriate unit (seconds, minutes, hours, days).
 *
 * @function timeSinceBid
 * @param {string} isoDate - An ISO-formatted date string representing the time of a bid.
 * @returns {string} A relative time string indicating how long ago the bid was made.
 */
export function timeSinceBid(isoDate) {
  const targetTime = new Date(isoDate).getTime();
  const currentTime = Date.now();
  const diffInMs = currentTime - targetTime;

  if (diffInMs <= 0) {
    return "Just now";
  }

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ago`;
  }

  if (hours > 0) {
    return `${hours}h ago`;
  }

  if (minutes > 0) {
    return `${minutes}m ago`;
  }

  return `${seconds}s ago`;
}
