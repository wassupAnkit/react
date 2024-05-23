export interface IInputFieldNoIcon {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IInputField {
  id: string;
  label: string;
  icon: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ISelectField {
  id: string;
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: ISelectOptions[];
}

export interface ISelectOptions {
  value: string;
  label: string;
}
