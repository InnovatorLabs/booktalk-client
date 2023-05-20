import { TextField, InputAdornment } from '@mui/material';
// icons
import CloseCircleIcon from '../icons/CloseCircleIcon';
import { ReactNode } from 'react';

type Props = {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  onReset: (inputName: string) => void;
  endAdornment?: ReactNode;
};

export default function TextInput(props: Props) {
  const { name, type, value, onChange, label, onReset, endAdornment } = props;

  return (
    <TextField
      name={name}
      type={type}
      autoComplete="off"
      size="medium"
      value={value}
      onChange={onChange}
      InputLabelProps={{ style: { fontSize: '0.8rem' } }}
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" className="gap-2">
            {endAdornment}
            <button type="reset" onClick={() => onReset(name)}>
              {value && <CloseCircleIcon />}
            </button>
          </InputAdornment>
        ),
      }}
    />
  );
}
