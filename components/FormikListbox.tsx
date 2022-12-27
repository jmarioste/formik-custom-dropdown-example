import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

export type ListboxOption<T> = {
  label: string;
  value: T;
};

type Props<T> = {
  value?: T;
  options: ListboxOption<T>[];
  name: string;
  label: string;
  placeholder?: string;
};

const FormikListbox = <T,>(props: Props<T>) => {
  const options = props.options;
  const [selected, setSelected] = useState<T | undefined>(props?.value);

  const _selected = options.find((o) => o.value === props.value);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button>{_selected?.label ?? "Select Option..."}</Listbox.Button>
      <Listbox.Options>
        {options.map((option, i) => (
          <Listbox.Option key={i} value={option.value}>
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default FormikListbox;
