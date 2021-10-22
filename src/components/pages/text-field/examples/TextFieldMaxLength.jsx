import TextField from "@molecules/text-field/TextField"

const TextFieldMaxLength = () => {
  return (
    <>
      <p>Max length: 10</p>
      <TextField maxLength={10} />
    </>
  )
}

export default TextFieldMaxLength
