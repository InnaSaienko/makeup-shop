export function unFormatId(formattedId) {
  const colorRegex = /(#|rgb\(\d+,\s*\d+,\s*\d+\))/;
  const match = formattedId.match(colorRegex);

  if (match) {
    const id = formattedId.slice(0, match.index);
    const selectedColor = formattedId.slice(match.index);
    return { id, selectedColor };
  } else {
    return { id: formattedId, selectedColor: null };
  }
}
