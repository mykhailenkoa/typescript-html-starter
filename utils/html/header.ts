import { getClassNamesAttributes } from './class.names';

export enum HeaderSize {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
export const addHeader = (
  text: string,
  input?: string,
  size: HeaderSize = HeaderSize.h1,
  classNames?: string | string[]
) =>
  (input || '').concat(
    `<${HeaderSize[size]} ${getClassNamesAttributes(classNames)}>${text}</${
      HeaderSize[size]
    }>`
  );
