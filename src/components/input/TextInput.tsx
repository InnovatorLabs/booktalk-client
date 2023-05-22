import React, { ReactNode } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import cx from 'classnames';
// icons
import CloseCircleIcon from '../icons/CloseCircleIcon';
// config
import { SIGNUP_ANIMATION_CLASS } from '@/config/auth';
// icons
import FillEyeIcon from '@/components/icons/FillEyeIcon';
import FillEyeInvisibleIcon from '@/components/icons/FillEyeInvisibleIcon';

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

function TextInput(props: Props, ref: React.ForwardedRef<unknown>) {
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

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [hover, setHover] = React.useState<boolean>(false);
  const [focus, setFocus] = React.useState<boolean>(false);

  const isType = showPassword ? 'text' : type;
  const isEyeIcon = [
    'password', //
  ].some(item => item === type);

  return (
    <TextField
      inputRef={ref}
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
      type={isType}
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
            {endAdornment}
            {readonly ? (
              <button
                className="text-[#D9D9D9]"
                tabIndex={-1}
                onClick={() => window.location.reload()}
              >
                변경하기
              </button>
            ) : hover || focus ? (
              <button
                type="reset"
                tabIndex={-1}
                onClick={() => onReset(name)} //
              >
                {value && <CloseCircleIcon />}
              </button>
            ) : (
              <></>
            )}
            {isEyeIcon && (
              <div
                className="cursor-pointer"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FillEyeIcon /> : <FillEyeInvisibleIcon />}
              </div>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}

export default React.forwardRef(TextInput);
