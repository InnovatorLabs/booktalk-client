import React, { ReactNode } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
// icons
import CloseCircleIcon from '../icons/CloseCircleIcon';
// config
import { SIGNUP_ANIMATION_CLASS } from '@/config/auth';

type Props = {
  readonly?: boolean;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  onReset: (inputName: string) => void;
  endAdornment?: ReactNode;
  placeholder?: string;
  invisible?: boolean;
  delay?: boolean;
};

export default function TextInput(props: Props) {
  const {
    readonly,
    name,
    type,
    value,
    onChange,
    label,
    onReset,
    endAdornment,
    placeholder,
    invisible,
    delay,
  } = props;

  const router = useRouter();
  const [hover, setHover] = React.useState<boolean>(false);
  const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <TextField
      className={
        invisible
          ? cx(
              SIGNUP_ANIMATION_CLASS,
              'h-0 overflow-hidden animate-[fadeOut_0.5s_ease-in-out]',
            )
          : delay
          ? cx(
              SIGNUP_ANIMATION_CLASS,
              'h-[68px] delay-500 animate-[fadeIn_1.3s_ease-in-out]',
            )
          : cx(SIGNUP_ANIMATION_CLASS, 'h-[68px]')
      }
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      name={name}
      type={type}
      autoComplete="off"
      size="medium"
      value={value}
      onChange={onChange}
      InputLabelProps={{ style: { fontSize: '0.8rem' } }}
      label={label}
      placeholder={placeholder}
      InputProps={{
        readOnly: readonly,
        style: {
          color: readonly ? '#adadad' : undefined,
          background: readonly ? '#f7f7f7' : undefined,
        },
        endAdornment: (
          <InputAdornment position="end" className="gap-2">
            {readonly ? (
              <button
                className="text-[#D9D9D9]"
                onClick={() => window.location.reload()}
              >
                변경하기
              </button>
            ) : hover || focus ? (
              <button type="reset" onClick={() => onReset(name)}>
                {value && <CloseCircleIcon />}
              </button>
            ) : (
              <></>
            )}
            {endAdornment}
          </InputAdornment>
        ),
      }}
    />
  );
}
