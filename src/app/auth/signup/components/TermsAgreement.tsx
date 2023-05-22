import React from 'react';
import cx from 'classnames';
import Checkbox from '@mui/material/Checkbox';
// config
import {
  SIGNUP_ANIMATION_CLASS,
  TERMS_AGREEMENT_CLASS,
  TERMS_AGREEMENT_TYPE,
} from '@/config/auth';

type Props = {
  invisible?: boolean;
  checkedById: Set<string>;
  setCheckedById: (list: Set<string>) => void;
};

export default function TermsAgreement(props: Props) {
  const { invisible, checkedById, setCheckedById } = props;

  const handleSelectDeselect = (name: string) => {
    const updatedCheckedById = new Set(checkedById);
    if (updatedCheckedById.has(name)) {
      updatedCheckedById.delete(name);
    } else {
      updatedCheckedById.add(name);
    }
    setCheckedById(updatedCheckedById);
  };

  const handleSelectDeselectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const checkList = Object.values(TERMS_AGREEMENT_TYPE);
      const allChecked = new Set(checkList.map(name => name));
      setCheckedById(allChecked);
    } else {
      setCheckedById(new Set());
    }
  };

  return (
    <div
      className={
        invisible
          ? cx(
              SIGNUP_ANIMATION_CLASS,
              'h-0 overflow-hidden flex flex-col w-full gap-2', //
            )
          : cx(
              SIGNUP_ANIMATION_CLASS,
              'h-[17rem] flex flex-col w-full gap-2 delay-500', //
            )
      }
    >
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.all}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.all)}
          onChange={e => handleSelectDeselectAll(e)}
          size="medium"
        />
        <span className="flex text-[16px] font-[600] gap-2">
          아래 약관에 모두 동의합니다
        </span>
      </div>
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.terms}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.terms)}
          onChange={() => handleSelectDeselect(TERMS_AGREEMENT_TYPE.terms)}
          size="medium"
        />
        <span className="flex text-[14px] gap-2">
          이용약관 동의(필수)
          <button type="button" className="underline">
            자세히 보기
          </button>
        </span>
      </div>
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.privacy}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.privacy)}
          onChange={() => handleSelectDeselect(TERMS_AGREEMENT_TYPE.privacy)}
          size="medium"
        />
        <span className="flex text-[14px] gap-2">
          개인정보 수집이용 동의(필수)
          <button type="button" className="underline">
            자세히 보기
          </button>
        </span>
      </div>
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.thirdParty}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.thirdParty)}
          onChange={() => handleSelectDeselect(TERMS_AGREEMENT_TYPE.thirdParty)}
          size="medium"
        />
        <span className="flex text-[14px] gap-2">
          개인정보 제3자 제공 동의(필수)
          <button type="button" className="underline">
            자세히 보기
          </button>
        </span>
      </div>
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.marketing}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.marketing)}
          onChange={() => handleSelectDeselect(TERMS_AGREEMENT_TYPE.marketing)}
          size="medium"
        />
        <span className="flex text-[14px] gap-2">
          마케팅 정보 수신 동의(필수)
          <button type="button" className="underline">
            자세히 보기
          </button>
        </span>
      </div>
      <div className={cx(TERMS_AGREEMENT_CLASS)}>
        <Checkbox
          name={TERMS_AGREEMENT_TYPE.age}
          checked={checkedById.has(TERMS_AGREEMENT_TYPE.age)}
          onChange={() => handleSelectDeselect(TERMS_AGREEMENT_TYPE.age)}
          size="medium"
        />
        <span className="flex text-[14px] gap-2">
          만 14세 이상 동의(필수)
          <button type="button" className="underline">
            자세히 보기
          </button>
        </span>
      </div>
    </div>
  );
}
