import { useFormik } from "formik";
import * as yup from "yup";

export function YupHandle() {


    const formik = useFormik({
        initialValues : {
            userName : '' ,
            age : '' ,
            mobile : '' ,
            city : ''
        } ,

        validationSchema : yup.object({
            userName : yup.string().required('name is required').min(4 , 'too short') ,
            age : yup.number().required('Age is required') ,
            mobile : yup.string().required('number is required').matches(/\+91\d{10}/ , 'Invalid number')
        }) ,

        onSubmit : (values) => {
            console.log(values)
        }
    })
 

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt> User Name </dt>
                    <dd>
                        <input type="text" {...formik.getFieldProps('userName')} name="userName" />
                    </dd>
                    <dd className="text-danger"> {formik.errors.userName} </dd>

                    <dt> Age </dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} name="age" />
                    </dd>
                    <dd className="text-danger"> {formik.errors.age} </dd>

                    <dt> Mobile </dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} name="mobile" />
                    </dd>
                    <dd className="text-danger"> {formik.errors.mobile} </dd>

                    <dt> City </dt>
                    <dd>
                        <select name="city" onChange={formik.handleChange} >
                            <option value='-1'> Select City </option>
                            <option value='BBSR'> BBSR </option>
                            <option value='Hyd'> Hyd </option>
                        </select>
                    </dd>
                    <dd className="text-danger"> {formik.errors.city} </dd>

                </dl>

                <button type="submit"> Register </button>
            </form>
        </div>
    )
}