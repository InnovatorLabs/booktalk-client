'use client';
import React from 'react';
// components
import TextInput from '@/components/input/TextInput';
import Progressbar from '@/components/Progressbar';
// types
import { SignupType } from '@/types/auth';
// config
import { STEP_LEVEL } from '@/config/auth';

export default function SignupPage() {
  const [form, setForm] = React.useState<SignupType>({
    email: '',
  });
  const [step, setStep] = React.useState<number>(1);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = () => {
    if (step < STEP_LEVEL) {
      setStep(step + 1);
    }
  };

  const handleFormReset = (name: string) => {
    setForm({ ...form, [name]: '' });
  };

  return (
    <section className="flex justify-center py-28">
      <div className="w-2/5 border shadow rounded-md">
        <p className="flex justify-center items-center h-[64px] font-bold">
          회원가입
        </p>
        <Progressbar
          value={step}
          steplevel={STEP_LEVEL} //
        />
        <div className="px-8 py-6">
          <article className="flex flex-col gap-3">
            <p className="font-semibold">
              Booktok에서 생각의 범위를 확장해보세요.
            </p>
            <p>혼자서 하는 독서를 넘어 독서 모임까지 Booktok과 함께 하세요.</p>
          </article>
          <div className="flex flex-col text-center py-10 gap-2">
            <TextInput
              name="email"
              type="text"
              value={form.email}
              onChange={handleFormChange}
              label="이메일"
              onReset={handleFormReset}
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
