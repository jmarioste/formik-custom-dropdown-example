import classNames from "classnames";
import { useField } from "formik";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
type Props = {
  options: string[];
  name: string;
  label: string;
  placeholder?: string;
};
const FormikDropdown = ({ options, name, label, placeholder }: Props) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [open, setOpen] = useState(false);
  const handleSelect = (val: string) => {
    setFieldValue(name, val);
    setOpen(false);
  };
  const _label = field.value || placeholder || "Select . . .";
  const Icon = open ? AiFillCaretUp : AiFillCaretDown;
  return (
    <div className="form-control">
      <p>{label}</p>
      <div
        className={classNames({
          "dropdown dropdown-end w-full": true,
          "dropdown-open": open,
        })}
      >
        <label
          tabIndex={0}
          className="btn btn-outline w-full relative no-animation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {_label}
          <Icon size={20} className="absolute right-5" />
        </label>
        <ul
          tabIndex={0}
          className={classNames({
            "dropdown-content menu p-2 shadow-lg": true,
            "bg-base-100 rounded-box w-72": true,
            hidden: !open,
          })}
        >
          {options.map((option, index) => {
            const active = field.value === option ? "active" : "";
            return (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                tabIndex={index + 1}
              >
                <button className={active}> {option}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FormikDropdown;
