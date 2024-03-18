"use client";

// import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  variant?:any;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  prefix?:React.ReactNode;
}

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  prefix,
  id,
  placeholder,
  validation,
  label,
  variant ='outlined',
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

//   const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }:any) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              prefix={prefix}
              placeholder={placeholder}
              value={value ? value : field.value}
              variant={variant}
              {...field}
              
            />
          ) : (
            <Input
              type={type}
              size={size}
              prefix={prefix}
              placeholder={placeholder}
              value={value ? value : field.value}
              variant={variant}
              {...field}
             
            />
          )
        }
      />
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </>
  );
};

export default FormInput;