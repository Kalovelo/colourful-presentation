import { ElementRef } from "react";

export interface ΙΒuttonProps {
  disabled: boolean;
  buttonRef: HTMLButtonElement | null;
  text: string;
  action: Function;
}
