function getDateInfo(dateElement) {
  const incomingDate = dateElement.innerHTML;

  const normalizedDate = incomingDate.split('.').reverse().join('-');

  const date = new Date(normalizedDate);

  function getWeekOfMonth(dateStr) {
    const adjustedDate = dateStr.getDate() + dateStr.getDay();
    const prefixes = ['0', '1', '2', '3', '4', '5'];
    return (parseInt(prefixes[0 | adjustedDate / 7]) + 1);
  }

  const weekOfMonth = getWeekOfMonth(date);

  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  };

  const formatedDate = date
    .toLocaleDateString('ru-RU', options)
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1, word.length)}`)
    .join(' ')
    .replace(/\d{1,2}/, ` ${weekOfMonth} неделя`)
    .replace(/.\./, 'года');

  return formatedDate;
}

const elements = document.querySelectorAll('.date');
elements.forEach((element) => element.innerHTML = getDateInfo(element));
