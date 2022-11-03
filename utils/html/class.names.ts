export const getClassNamesAttributes = (classNames?: string | string[]) =>
  (!classNames && '') ||
  `class='${
    (typeof classNames === 'string' && classNames) ||
    (Array.isArray(classNames) && classNames.join(' '))
  }'`;
