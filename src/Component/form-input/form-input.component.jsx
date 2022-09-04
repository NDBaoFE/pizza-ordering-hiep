import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import './form-input.styles.jsx'
import { FormInputLabel, Input, Group } from './form-input.styles.jsx'
const FormInput = ({ label, nameRegister, ...otherProps }) => {
  const {
    register,
    watch,
    formState: { isDirty },
  } = useFormContext()
  const registerField = watch(`${nameRegister}`)

  return (
    <Group>
      {label && <FormInputLabel shrink={registerField.length}>{label}</FormInputLabel>}
      <Input {...otherProps} {...register(`${nameRegister}`)} />
    </Group>
  )
}

export default FormInput
