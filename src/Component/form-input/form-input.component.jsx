import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import './form-input.styles.jsx'
import { FormInputLabel, Input, Group } from './form-input.styles.jsx'
const FormInput = ({ label, nameRegister, ...otherProps }) => {
  const {
    register,
    formState: { isDirty, errors },
  } = useFormContext()

  // {errors.email && <p>Email is required</p>}
  // {errors.password && <p>Password is required</p>}
  // {errors.displayName && <p>Display Name is required</p>}
  // {errors.confirmPassword && <p>Confirm Password is required</p>}
  return (
    <Group>
      {label && <FormInputLabel shrink={isDirty}>{label}</FormInputLabel>}
      <Input {...otherProps} {...register(`${nameRegister}`, { required: true })} />
    </Group>
  )
}

export default FormInput
