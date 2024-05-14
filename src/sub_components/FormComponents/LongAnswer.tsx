import { useLongAnswerInput } from 'react-google-forms-hooks'

export default function LongAnswerInput({ id, placeholder }:{id: string, placeholder: string}) {
  const { register } = useLongAnswerInput(id)

  return (
    <fieldset>
        <textarea
        rows={3}
        className="form-control"
        placeholder={placeholder}
        required
        {...register()}
        />
    </fieldset>
  )
}