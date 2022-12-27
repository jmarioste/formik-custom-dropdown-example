import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
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
  const [selectedValue, setSelectedValue] = useState<T | undefined>();

  const selectedItem = options.find((o) => o.value === selectedValue);
  const label = selectedItem?.label ?? props.label ?? "Select Option...";

  return (
    <Listbox
      value={selectedValue}
      onChange={setSelectedValue}
      as={React.Fragment}
    >
      {({ open }) => {
        const Icon = open ? AiFillCaretUp : AiFillCaretDown;
        return (
          <div
            className={cn({
              "dropdown dropdown-end w-full": true,
              "dropdown-open": open,
            })}
          >
            <Listbox.Button className="btn btn-outline w-full relative no-animation">
              {label}
              <Icon size={20} className="absolute right-5" />
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
        );
      }}
    </Listbox>
  );
};

export default FormikListbox;
