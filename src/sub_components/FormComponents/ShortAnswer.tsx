import { useShortAnswerInput } from 'react-google-forms-hooks'

export default function ShortAnswerInput({ id, placeholder }:{id: string, placeholder: string}) {
  const { register } = useShortAnswerInput(id)

  return (
    <fieldset>
        <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        required
        {...register()}
        />
    </fieldset>
  )
}