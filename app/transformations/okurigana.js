const setOkurigana = (string) => {
  const pointIndex = string.indexOf('.');

  if (pointIndex === -1) {
    return string;
  }

  const beforePoint = string.slice(0, pointIndex);
  const afterPoint = string.slice(pointIndex + 1);

  return `${beforePoint}<span class="okurigana">${afterPoint}</span>`;
}

export default setOkurigana;
