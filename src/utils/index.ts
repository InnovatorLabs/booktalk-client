export const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(1, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const parseTime = (formattedTime: string) => {
  const [minutes, seconds] = formattedTime.split(':');

  const totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);

  return totalSeconds;
};
