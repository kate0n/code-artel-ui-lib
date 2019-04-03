import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface ICheckboxs {
  value?: any;
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  [propName: string]: any;
}

export const CheckboxBase = (props: ICheckboxs) => {
  const {
    id,
    name,
    disabled = false,
    checked,
    defaultChecked = false,
    value,
    onChange,
    ...rest
  } = props;

  // console.log("CheckboxBase", props);

  return (
    <Input
      id={`checkbox-${id}`}
      disabled={disabled}
      checked={checked}
      name={name}
      type={"checkbox"}
      as={"input"}
      value={value}
      onChange={(event: any) => {
        onChange(event.target.value);
      }}
      {...rest}
    />
  );
};

export default CheckboxBase;
