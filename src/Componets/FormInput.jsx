import './FormInput.css'

const FormInput = (props)=>{
    const {label, onChange, id, ...inputprpos}=props;
    return(
        <div className="formInput">
            <label>{label}</label>
            <input  {...inputprpos} onChange={onChange} />

        </div>
    )
}

export default FormInput