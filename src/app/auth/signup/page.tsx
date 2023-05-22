'use client';
import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
// components
import TextInput from '@/components/input/TextInput';
import ConfirmInput from '@/components/input/ConfirmInput';
import Progressbar from '@/components/Progressbar';
import TermsAgreement from './components/TermsAgreement';
// types
import { SignupType, ISignupErrorMsg } from '@/types/auth';
// config
import {
  STEP_LEVEL,
  SUBMIT_BUTTON_CLASS,
  TERMS_AGREEMENT_TYPE,
  SIGNUP_ANIMATION_CLASS,
  CONFIRM_LIMIT, //
} from '@/config/auth';

const initialFormState = {
  email: '',
  password: '',
  passwordConfirm: '',
  nickName: '',
};

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = React.useState<SignupType>(initialFormState);
  const [step, setStep] = React.useState<number>(1);
  const [confirmNumber, setConfirmNumber] = React.useState<string | number>('');
  const [checkedById, setCheckedById] = React.useState<Set<string>>(new Set());
  const [errorMsg, setErrorMsg] = React.useState<ISignupErrorMsg>({
    ...initialFormState,
    confirm: '',
  });

  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const confirmInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const passwordConfirmInputRef = React.useRef<HTMLInputElement>(null);

  const isLimit = confirmNumber.toString().length >= CONFIRM_LIMIT;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: '' } as ISignupErrorMsg);
  };

  const handleConfirmNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const isValidNumber = /^-?\d*\.?\d+$/.test(value);
    if (!isValidNumber) {
      setConfirmNumber(value.slice(0, -1));
      return;
    }
    if (!isLimit || value.length < CONFIRM_LIMIT) {
      setConfirmNumber(value);
    }
    setErrorMsg({ ...errorMsg, [name]: '' } as ISignupErrorMsg);
  };

  const validationOfSubmitButtom = () => {
    switch (step) {
      case 1:
        const acceptedEmail = [
          'fz7948@naver.com',
          'fz7948@gmail.com', //
        ].some(item => item === form.email);
        if (!acceptedEmail) {
          setErrorMsg({ ...errorMsg, email: '이메일 주소를 확인해주세요' });
          emailInputRef?.current && emailInputRef.current.focus();
          return false;
        }
        break;
      case 2:
        const acceptedConfirmNumber = [
          123456, //
        ].some(item => item === +confirmNumber);
        if (!acceptedConfirmNumber) {
          setErrorMsg({
            ...errorMsg,
            confirm: '인증번호를 정확히 입력해주세요',
          });
          confirmInputRef?.current && confirmInputRef.current.focus();
          return false;
        }
        break;
      case 3:
        const reg =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        const checkPassword = reg.test(form.password);
        const checkPasswordConfirm = form.password === form.passwordConfirm;
        if (!checkPassword) {
          setErrorMsg({
            ...errorMsg,
            password: '영문, 숫자, 기호 조합 8~16자로 입력해주세요',
          });
          passwordInputRef?.current && passwordInputRef.current.focus();
          return false;
        }
        if (!checkPasswordConfirm) {
          setErrorMsg({
            ...errorMsg,
            passwordConfirm: '비밀번호가 일치하지 않아요',
          });
          passwordConfirmInputRef?.current &&
            passwordConfirmInputRef.current.focus();
          return false;
        }
        break;
    }
    return true;
  };

  const handleFormSubmit = () => {
    if (!validationOfSubmitButtom()) return;
    if (step < STEP_LEVEL) {
      setStep(step + 1);
    }
    if (step === 4) {
      router.push('/feed');
    }
  };

  const handleFormReset = (name: string) => {
    setForm({ ...form, [name]: '' });
  };

  const makeSubmitButtonActiveText = React.useCallback(
    (step: number) => {
      let active = false;
      let text;
      switch (step) {
        case 1:
          const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
          active = !errorMsg.email && exptext.test(form.email);
          text = '이메일 인증하기';
          break;
        case 2:
          active = isLimit;
          text = '이메일 인증 완료';
          break;
        case 3:
          active =
            [
              form.password,
              form.passwordConfirm,
              form.nickName, //
            ].every(item => item.length) &&
            !errorMsg.password &&
            !errorMsg.passwordConfirm;
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
    },
    [form, checkedById, isLimit, errorMsg],
  );

  const handleSignupKeydownEvent = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && makeSubmitButtonActiveText(step).active) {
      handleFormSubmit();
    }
  };

  React.useEffect(() => {
    const makeInputRefFocusByStep = () => {
      switch (step) {
        case 1:
          setTimeout(() => {
            emailInputRef?.current && emailInputRef.current.focus();
          }, 0);
          break;
        case 2:
          setTimeout(() => {
            confirmInputRef?.current && confirmInputRef.current.focus();
          }, 500);
          break;
        case 3:
          setTimeout(() => {
            passwordInputRef?.current && passwordInputRef.current.focus();
          }, 1000);
          break;
      }
    };
    makeInputRefFocusByStep();
  }, [step]);

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
            <article
              className="flex flex-col overflow-hidden pt-2"
              onKeyDown={e => handleSignupKeydownEvent(e)}
            >
              <TextInput
                ref={emailInputRef}
                readonly={step > 1}
                name="email"
                type="text"
                value={form.email}
                onChange={handleFormChange}
                label="이메일"
                onReset={handleFormReset}
                invisible={step >= 4}
                errorMsg={errorMsg.email}
              />
              <ConfirmInput
                ref={confirmInputRef}
                value={confirmNumber}
                name="confirm"
                onChange={handleConfirmNumberChange}
                limit={CONFIRM_LIMIT}
                invisible={step !== 2}
                errorMsg={errorMsg.confirm}
              />
              <TextInput
                ref={passwordInputRef}
                name="password"
                type="password"
                value={form.password}
                onChange={handleFormChange}
                label="비밀번호"
                onReset={handleFormReset}
                invisible={step !== 3}
                delay={step < 4}
                errorMsg={errorMsg.password}
              />
              <TextInput
                ref={passwordConfirmInputRef}
                name="passwordConfirm"
                type="password"
                value={form.passwordConfirm}
                onChange={handleFormChange}
                label="비밀번호 확인"
                onReset={handleFormReset}
                invisible={step !== 3}
                delay={step < 4}
                errorMsg={errorMsg.passwordConfirm}
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
                makeSubmitButtonActiveText(step).active
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
                makeSubmitButtonActiveText(step).active
                  ? () => handleFormSubmit()
                  : undefined
              }
            >
              {makeSubmitButtonActiveText(step).text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
