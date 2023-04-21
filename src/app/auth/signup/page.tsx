'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TextField, InputAdornment } from '@mui/material';

export default function SignupPage() {
  const router = useRouter();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  return (
    <section className="flex justify-center py-28">
      <div className="w-2/5 border shadow rounded-md">
        <p className="flex justify-center items-center h-[64px] font-bold border-b">
          회원가입
        </p>
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
            <button type="submit" className="h-[60px] rounded-md mt-2">
              이메일 인증하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
