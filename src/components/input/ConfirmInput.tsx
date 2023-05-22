import React from 'react';
import cx from 'classnames';
import { TextField, InputAdornment } from '@mui/material';
// config
import {
  SIGNUP_ANIMATION_CLASS,
  CONFIRM_ACTIVE_BUTTON_CLASS,
} from '@/config/auth';
// utils
import { formatTime, parseTime } from '@/utils';

type Props = {
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  limit: number;
  invisible?: boolean;
  errorMsg: string;
};

function ConfirmInput(props: Props, ref: React.ForwardedRef<unknown>) {
  const { value, onChange, limit, invisible, errorMsg, name } = props;

  const [active, setActive] = React.useState<boolean>(false);
  const countdownRef = React.useRef<any>(null);

  const INIT_TIME = '3:00';

  React.useEffect(() => {
    if (!invisible) {
      const intervalId = setInterval(() => {
        if (countdownRef.current) {
          const isActive = +parseTime(countdownRef.current.textContent) <= 1;

          countdownRef.current.textContent = isActive
            ? formatTime(0)
            : formatTime(+parseTime(countdownRef.current.textContent) - 1);
          if (isActive) {
            setActive(true);
          }
        }
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [invisible]);

  const handleResubmitClick = () => {
    countdownRef.current.textContent = INIT_TIME;
    setActive(false);
  };

  return (
    <>
      <TextField
        inputRef={ref}
        className={
          invisible
            ? cx(SIGNUP_ANIMATION_CLASS, 'h-0 overflow-hidden')
            : cx(
                SIGNUP_ANIMATION_CLASS,
                'h-[68px] animate-[fadeIn_0.5s_ease-in-out]',
              )
        }
        type="text"
        name={name}
        autoComplete="off"
        size="medium"
        value={value}
        onChange={onChange}
        InputLabelProps={{ style: { fontSize: '0.8rem' } }}
        placeholder={`인증번호 ${limit}자리를 입력해주세요`}
        error={!!errorMsg}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className="gap-3">
              <span
                ref={countdownRef}
                className="text-black" //
              >
                {INIT_TIME}
              </span>
              <button
                type="button"
                className={
                  active
                    ? cx(CONFIRM_ACTIVE_BUTTON_CLASS, 'bg-[#89CFF0]')
                    : cx(CONFIRM_ACTIVE_BUTTON_CLASS, 'bg-[#D9D9D9]')
                }
                onClick={
                  active
                    ? () => handleResubmitClick() //
                    : undefined
                }
              >
                재전송
              </button>
            </InputAdornment>
          ),
        }}
      />
      {errorMsg && (
        <div className="self-start text-[10px] h-[30px] font-[600] pl-2 text-[#B22212] mt-[-8px]">
          {errorMsg}
        </div>
      )}
    </>
  );
}

export default React.forwardRef(ConfirmInput);
