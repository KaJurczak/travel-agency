export const formatTime = (time) => { 
  if(typeof time == 'undefined' || null || typeof time !== 'number' || time < 0){
    return null; }

  else {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 3600) % 60);

    const correctSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const correctMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const correctHours = hours < 10 ? `0${hours}` : hours;

    return (`${correctHours}:${correctMinutes}:${correctSeconds}`);
  }
};