import './FormInput.css'

const FormInput = (props)=>{
    return(
        <div className="formInput">
            {/* <label>UserName</label */}
            <input placeholder={props.placeholder}  ref={props.refer} />

        </div>
    )
}

export default FormInput