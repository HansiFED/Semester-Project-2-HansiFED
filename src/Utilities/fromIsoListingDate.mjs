export function listingRemainingIsoCalculator(isoDate) {
  const targetTime = new Date(isoDate).getTime();
  const currentTime = Date.now();

  const diffInMs = targetTime - currentTime;

  if (diffInMs <= 0) {
    return "0d 0h 0m 0s";
  }

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
