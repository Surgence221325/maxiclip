import { InputHTMLAttributes, FC } from 'react'

import './form-input.css'

type FromInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FromInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="form-field">
      <input {...otherProps} />
    </div>
  )
}

export default FormInput
