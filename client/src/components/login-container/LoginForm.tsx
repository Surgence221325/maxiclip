import { InputHTMLAttributes, FC } from 'react'
import FormInput from '../form-input/form-input'

type LoginFormProps = { email: string; password: string; handler: any }

const LoginForm: FC<LoginFormProps> = ({
  email,
  password,
  handler,
}: LoginFormProps) => {
  return (
    <div className="LoginFormDisplay">
      <h3>Username </h3>
      <FormInput
        type="email"
        label="Username"
        name="email"
        value={email}
        onChange={handler}
      />
      <h3>Password </h3>
      <FormInput
        type="password"
        label="Password"
        name="password"
        value={password}
        onChange={handler}
      />
      <div className='LoginButton'>Log In</div>
    </div>
  )
}

export default LoginForm
