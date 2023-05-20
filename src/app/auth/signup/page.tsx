'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TextField, InputAdornment } from '@mui/material';
import styled from '@emotion/styled';

const STEP_LEVEL = 4;

export default function SignupPage() {
  const router = useRouter();

  const [step, setStep] = React.useState<number>(1);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleFormSubmit = () => {
    if (step < STEP_LEVEL) {
      setStep(step + 1);
    }
  };

  return (
    <section className="flex justify-center py-28">
      <div className="w-2/5 border shadow rounded-md">
        <p className="flex justify-center items-center h-[64px] font-bold">
          회원가입
        </p>
        <div className="relative w-full">
          <div className="absolute w-full h-[5px] bg-slate-100" />
          <ProgerssBar
            value={step}
            className="absolute w-full bg-[#141414] h-[5px]"
          />
        </div>
        <div className="px-8 py-6">
          <article className="flex flex-col gap-3">
            <p className="font-semibold">
              Booktok에서 생각의 범위를 확장해보세요.
            </p>
            <p>혼자서 하는 독서를 넘어 독서 모임까지 Booktok과 함께 하세요.</p>
          </article>
          <div className="flex flex-col text-center py-10 gap-2">
            <TextField
              name="email"
              type="text"
              autoComplete="off"
              size="medium"
              //   value={form.email}
              onChange={handleFormChange}
              InputLabelProps={{ style: { fontSize: '0.8rem' } }}
              label="이메일"
            />
            <button
              type="submit"
              className="h-[60px] rounded-md mt-2"
              onClick={handleFormSubmit}
            >
              이메일 인증하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProgerssBar = styled.div<{ value: number }>`
  transition-duration: 500ms;
  transform: scaleX(${props => props.value / STEP_LEVEL});
  transform-origin: center left;
`;
