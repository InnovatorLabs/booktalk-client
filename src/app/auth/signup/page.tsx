'use client';
import React from 'react';
import cx from 'classnames';
// components
import TextInput from '@/components/input/TextInput';
import ConfirmInput from '@/components/input/ConfirmInput';
import Progressbar from '@/components/Progressbar';
import TermsAgreement from './components/TermsAgreement';
// types
import { SignupType } from '@/types/auth';
// config
import {
  STEP_LEVEL,
  SUBMIT_BUTTON_CLASS,
  TERMS_AGREEMENT_TYPE,
  SIGNUP_ANIMATION_CLASS,
  CONFIRM_LIMIT, //
} from '@/config/auth';
// icons
import FillEyeIcon from '@/components/icons/FillEyeIcon';
import FillEyeInvisibleIcon from '@/components/icons/FillEyeInvisibleIcon';

const initialFormState = {
  email: '',
  password: '',
  passwordConfirm: '',
  nickName: '',
};

export default function SignupPage() {
  const [form, setForm] = React.useState<SignupType>(initialFormState);
  const [step, setStep] = React.useState<number>(1);
  const [confirmEmail, setConfirmEmail] = React.useState<string | number>('');
  const [showPwd, setShowPwd] = React.useState<boolean>(false);
  const [checkedById, setCheckedById] = React.useState<Set<string>>(new Set());

  const isLimit = confirmEmail.toString().length >= CONFIRM_LIMIT;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValidNumber = /^-?\d*\.?\d+$/.test(value);
    if (!isValidNumber) {
      setConfirmEmail(value.slice(0, -1));
      return;
    }
    if (!isLimit || value.length < CONFIRM_LIMIT) {
      setConfirmEmail(value);
    }
  };

  const handleFormSubmit = () => {
    if (step < STEP_LEVEL) {
      setStep(step + 1);
    }
  };

  const handleFormReset = (name: string) => {
    setForm({ ...form, [name]: '' });
  };

  const validationOfSubmitButton = (step: number) => {
    let active = false;
    let text;
    switch (step) {
      case 1:
        active = !!form.email.length;
        text = '이메일 인증하기';
        break;
      case 2:
        active = isLimit;
        text = '이메일 인증 완료';
        break;
      case 3:
        active = [
          form.password,
          form.passwordConfirm,
          form.nickName, //
        ].every(item => item.length);
        text = '다음';
        break;
      case 4:
        active = [
          TERMS_AGREEMENT_TYPE.age,
          TERMS_AGREEMENT_TYPE.marketing,
          TERMS_AGREEMENT_TYPE.privacy,
          TERMS_AGREEMENT_TYPE.terms,
          TERMS_AGREEMENT_TYPE.thirdParty,
        ].every(item => checkedById.has(item));
        text = '완료';
        break;
    }
    return { active, text };
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
          <article
            className={
              step !== 4
                ? cx(
                    SIGNUP_ANIMATION_CLASS, //
                    'h-[68px] flex flex-col gap-3',
                  )
                : cx(
                    SIGNUP_ANIMATION_CLASS,
                    'h-[0] overflow-hidden animate-[fadeOff_5s_ease-in-out]',
                  )
            }
          >
            <p className="font-semibold">
              Booktok에서 생각의 범위를 확장해보세요.
            </p>
            <p>혼자서 하는 독서를 넘어 독서 모임까지 Booktok과 함께 하세요.</p>
          </article>
          <div className="flex flex-col text-center pt-8 pb-10">
            <article className="flex flex-col overflow-hidden pt-2">
              <TextInput
                readonly={step > 1}
                name="email"
                type="text"
                value={form.email}
                onChange={handleFormChange}
                label="이메일"
                onReset={handleFormReset}
                invisible={step >= 4}
              />
              <ConfirmInput
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                limit={CONFIRM_LIMIT}
                invisible={step !== 2}
              />
              <TextInput
                name="password"
                type={showPwd ? 'text' : 'password'}
                value={form.password}
                onChange={handleFormChange}
                label="비밀번호"
                onReset={handleFormReset}
                invisible={step !== 3}
                delay={step < 4}
                endAdornment={
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowPwd(!showPwd)}
                  >
                    {showPwd ? <FillEyeIcon /> : <FillEyeInvisibleIcon />}
                  </div>
                }
              />
              <TextInput
                name="passwordConfirm"
                type="password"
                value={form.passwordConfirm}
                onChange={handleFormChange}
                label="비밀번호 확인"
                onReset={handleFormReset}
                invisible={step !== 3}
                delay={step < 4}
              />
              <TextInput
                name="nickName"
                type="text"
                value={form.nickName}
                onChange={handleFormChange}
                label="닉네임"
                onReset={handleFormReset}
                invisible={step !== 3}
                delay={step < 4}
              />
              <TermsAgreement
                invisible={step !== 4}
                checkedById={checkedById}
                setCheckedById={setCheckedById}
              />
            </article>
            <button
              type="submit"
              className={
                validationOfSubmitButton(step).active
                  ? cx(
                      SUBMIT_BUTTON_CLASS,
                      'bg-[#89CFF0] text-white hover:brightness-110',
                    )
                  : cx(
                      SUBMIT_BUTTON_CLASS,
                      'bg-[#eaeaea] text-[#ADADAD] cursor-not-allowed',
                    )
              }
              onClick={
                validationOfSubmitButton(step).active
                  ? () => handleFormSubmit()
                  : undefined
              }
            >
              {validationOfSubmitButton(step).text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
