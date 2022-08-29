import { useFormContext } from 'react-hook-form'
import './form-input.styles.scss'
const FormInput = ({ label, nameRegister, ...otherProps }) => {
  const {
    register,
    formState: { isDirty },
  } = useFormContext()

  return (
    <div className="group">
      {label && <label className={`${isDirty ? 'shrink' : ''} form-input-label`}>{label}</label>}
      <input
        className="form-input"
        {...otherProps}
        {...register(`${nameRegister}`, { required: true })}
      />
    </div>
  )
}

export default FormInput
