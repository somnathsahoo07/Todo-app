import { useForm } from "react-hook-form"

export function HookForm() {

    const {register , handleSubmit , formState:{errors}} = useForm();

    const submit = (values)=>{
        console.log(values);
    }
    return(
        <div>
            <form onSubmit = {handleSubmit(submit)}>
            <dl>
                <dt> Name </dt>
                <dd>
                    <input type="text" name="userName" {...register("userName" , {required:true , minlength:4})} />
                </dd>
                <dd>
                    {
                        (errors.userName?.type === 'required') ? <span> User name reqd </span> : <span> </span> && (errors.userName?.type === "minLength") ? <span> Too short </span> : <span> </span>
                    }
                </dd>

                <dt> Mobile </dt>
                <dd>
                    <input type= "text" name="Mobile" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})}/>
                </dd>
                <dd className="text-danger">
                    {
                    (errors.Mobile?. type=== 'required') ? <span>Mobile number is required</span> : <span> </span> && (errors.Mobile?.type === 'pattern')? <span> Invalid Mobile number</span> : <span> </span>
                    
                    }
                </dd>

            </dl>
            <button input="submit">Register</button>
            </form>
        </div>
    )
}