'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { TextField, InputAdornment } from '@mui/material';
// components
import TextInput from '@/components/input/TextInput';

export default function PasswordFindPage() {
  const router = useRouter();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  return (
    <section className="flex justify-center py-28">
      <div className="w-2/5 border shadow rounded-md">
        <p className="flex justify-center items-center h-[64px] font-bold border-b">
          비밀번호 찾기
        </p>
        <div className="px-8 py-6">
          <article className="flex flex-col gap-3">
            <p>가입하신 정확한 이메일 주소를 입력해주세요.</p>
            <p>
              입력하신 이메일 주소로 비밀번호 재설정 안내 메일을 보내드려요.
            </p>
          </article>
          <div className="flex flex-col text-center pt-6 pb-10">
            <TextInput
              name=""
              type=""
              value=""
              onChange={() => console.log()}
              label=""
              onReset={() => console.log()}
            />
            <button
              type="submit"
              className="h-[60px] rounded-md mt-2 bg-[#89CFF0] text-white hover:brightness-110"
            >
              재설정 이메일 전송
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
