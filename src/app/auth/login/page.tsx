'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TextField, InputAdornment } from '@mui/material';
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const router = useRouter();

  const [showPwd, setShowPwd] = React.useState(false);
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormReset = (name: string) => {
    setForm({ ...form, [name]: '' });
  };

  return (
    <section className="flex justify-center py-28">
      <div className="w-2/5 border shadow rounded-md">
        <p className="flex justify-center items-center h-[64px] font-bold border-b">
          로그인
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
              value={form.email}
              onChange={handleFormChange}
              InputLabelProps={{ style: { fontSize: '0.8rem' } }}
              label="이메일"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="gap-2">
                    <button
                      type="reset"
                      onClick={() => handleFormReset('email')}
                    >
                      {form.email && (
                        <AiFillCloseCircle size={22} color="#C4C4C4" />
                      )}
                    </button>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              type={showPwd ? 'text' : 'password'}
              autoComplete="off"
              size="medium"
              value={form.password}
              onChange={handleFormChange}
              InputLabelProps={{ style: { fontSize: '0.8rem' } }}
              label="비밀번호"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="gap-2">
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowPwd(!showPwd)}
                    >
                      {showPwd ? (
                        <AiFillEye size={30} color="#C4C4C4" />
                      ) : (
                        <AiFillEyeInvisible size={30} color="#C4C4C4" />
                      )}
                    </div>
                    <button
                      type="reset"
                      onClick={() => handleFormReset('password')}
                    >
                      {form.password && (
                        <AiFillCloseCircle size={22} color="#C4C4C4" />
                      )}
                    </button>
                  </InputAdornment>
                ),
              }}
            />
            <button type="submit" className="h-[60px] rounded-md mt-2">
              이메일로 로그인하기
            </button>
            <ul className="flex justify-center gap-10 py-4">
              <li
                className="mt-1 text-[#B3B3B3]"
                onClick={() => router.push('/auth/signup')}
              >
                회원가입
              </li>
              <li
                className="mt-1 text-[#B3B3B3]"
                onClick={() => router.push('/auth/password-find')}
              >
                비밀번호 찾기
              </li>
            </ul>
            <div className="flex justify-center relative border-t border-black mt-2">
              <p className="absolute top-[-0.5rem] text-[#B3B3B3] bg-white px-4 text-xs">
                또는
              </p>
            </div>
            <div className="flex justify-center mt-4 gap-6">
              <button
                type="button"
                className="w-[40px] h-[40px] bg-[#f9e000] rounded-full"
              >
                <RiKakaoTalkFill size={24} />
              </button>
              <button
                type="button"
                className="w-[40px] h-[40px] bg-[#1ec800] rounded-full"
              >
                <SiNaver size={14} color="white" />
              </button>
              <button
                type="button"
                className="w-[40px] h-[40px] border bg-white shadow-sm rounded-full"
              >
                <FcGoogle size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
