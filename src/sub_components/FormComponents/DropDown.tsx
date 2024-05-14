import { useDropdownInput } from 'react-google-forms-hooks'

export default function DropdownInput({ id, placeholder }:{id: string, placeholder: string}) {
  const { register, options } = useDropdownInput(id)
  return (
        <fieldset>
            <select
            id="year"
            style={ {
                width: '100%',
                height: '40px',
                backgroundColor: 'rgba(250, 250, 250, 0.1)',
                borderRadius: '7px',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '13px',
                marginBottom: '20px',
                letterSpacing: '0.5px',
                }}
            required
            {...register()}
            >
            <option value=''>{placeholder}</option>
            {options.map((o) => {
            return (
                <option key={o.label} value={o.label} style={{color: "#00080c"}}>
                {o.label}
                </option>
            )
            })}
            </select>
        </fieldset>
  )
}