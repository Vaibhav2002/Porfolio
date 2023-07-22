"use client"

import React, { ComponentProps, Dispatch, SetStateAction } from "react";
import yup from 'yup'

type InputProps = {
  multiline?: false;
} & ComponentProps<"input">;

type MultilineProps = {
  multiline: true;
} & ComponentProps<"textarea">;

type TextInputProps = {
  placeholder: string;
  className?: string;
  value:string,
  onValueChange:(value:string) => void
} & (InputProps | MultilineProps);

const TextInput = ({
  placeholder,
  className = "",
  multiline,
  value,
  onValueChange,
  ...props
}: TextInputProps) => {
  return (
    <div className={`${className}`}>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          className={`textarea w-full rounded-lg bg-brand4 p-12 text-small text-brand4-content placeholder-brand4-content focus:outline-brand4-content resize-none`}
          {...props as ComponentProps<"textarea">}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className={`input w-full rounded-full bg-brand4 p-12 text-small text-brand4-content placeholder-brand4-content focus:outline-brand4-content`}
          {...(props as ComponentProps<"input">)}
        />
      )}
    </div>
  );
};

export default TextInput;
