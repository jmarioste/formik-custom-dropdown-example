import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import cn from "classnames";

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
  const [selected, setSelected] = useState<T | undefined>();

  const _selected = options.find((o) => o.value === selected);
  const _label = _selected?.label ?? props.label ?? "Select Option...";

  return (
    <Listbox value={selected} onChange={setSelected} as={React.Fragment}>
      {({ open }) => (
        <div
          className={cn({
            "dropdown dropdown-end w-full": true,
            "dropdown-open": open,
          })}
        >
          <Listbox.Button className="btn btn-outline w-full relative no-animation">
            {_label}
          </Listbox.Button>
          <Listbox.Options
            className={cn({
              "dropdown-content menu p-2 shadow-lg": true,
              "bg-base-100 rounded-box w-72": true,
              hidden: !open,
            })}
          >
            {options.map((option, i) => (
              <Listbox.Option key={i} value={option.value}>
                {({ active, disabled, selected }) => (
                  <button
                    className={cn({
                      active: selected,
                      "btn-disabled": disabled,
                      "bg-primary/80 text-primary-content": active,
                    })}
                  >
                    {option.label}
                  </button>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  );
};

export default FormikListbox;
