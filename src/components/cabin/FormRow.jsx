
export default function FormRow({label, children, error}) {

  return (
    <div className="mb-5 flex justify-between items-center">
      <label 
        htmlFor={children.props.id} 
        className="text-lg font-medium text-gray-900 w-[23%]">{label}</label>
      {children}   
      <p className="errorStyle">{error}</p>
    </div>
  )
}
