export function formatId(id, selectedColor) {
  const formattedId = selectedColor ? `${id}${selectedColor}` : id;

    return formattedId;    
  }
