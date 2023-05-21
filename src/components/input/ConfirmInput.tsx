import React from 'react';
import cx from 'classnames';
import { TextField, InputAdornment } from '@mui/material';
// config
import { SIGNUP_ANIMATION_CLASS } from '@/config/auth';

type Props = {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  limit: number;
  invisible?: boolean;
};

export default function ConfirmInput(props: Props) {
  const { value, onChange, limit, invisible } = props;

  return (
    <TextField
      className={
        invisible
          ? cx(SIGNUP_ANIMATION_CLASS, 'h-0 overflow-hidden')
          : cx(
              SIGNUP_ANIMATION_CLASS,
              'h-[68px] animate-[fadeIn_0.5s_ease-in-out]',
            )
      }
      type="number"
      autoComplete="off"
      size="medium"
      value={value}
      onChange={onChange}
      InputLabelProps={{ style: { fontSize: '0.8rem' } }}
      placeholder={`인증번호 ${limit}자리를 입력해주세요`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" className="gap-2">
            {/* <button type="button">{value && <CloseCircleIcon />}</button> */}
          </InputAdornment>
        ),
      }}
    />
  );
}
