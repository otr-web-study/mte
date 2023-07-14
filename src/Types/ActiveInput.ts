import { NestedTemplatePathKey } from './Template';

export type ActiveInput =
  | {
      input: HTMLTextAreaElement | HTMLInputElement;
      path: NestedTemplatePathKey[];
    }
  | undefined;
