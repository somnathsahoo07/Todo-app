
import { useFormik , Formik , Field , Form  , ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikHandle() {

   /* function validateUser(user) {
        var errors = {userName:'' , age :'' , mobile:'' , city:''}

        if(user.userName.length === 0) {
            errors.userName = "name can't be empty"
        }
        else {
            errors.userName = ''
        }


        if(isNaN(user.age)) {
            errors.age = "Age must be a number"
        }
        else {
            errors.age = ''
        }

        if(user.mobile.length === 0) {
            errors.mobile = "Number can't be empty"
        }
        else {
            if(user.mobile.match(/\+91\d{10}/)){
                errors.mobile = "mobile must be 10 digits"
            }
            else{
                errors.user = ''
            }
        }

        if(user.city === '-1'){
            errors.city = "select a city"
        }
        else {
            errors.city = ''
        }

        return errors ;
    }


    const formik = useFormik({
        initialValues : {
            userName :'' ,
            age : '' ,
            mobile : '' ,
            city : '-1'
        } ,

        validate : validateUser ,

        onSubmit : (values) => {
            console.log(values);
        }
    })


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt> User Name </dt>
                    <dd>
                        <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="userName" />
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
    ) */



        const initialValues = {
            initialValues : {
                userName : '' ,
                age : '' ,
                mobile : ''
            }
        }

        const validation = yup.object({
            userName : yup.string().required('Name reqd').min(4) , 
            age : yup.number().required('reqd') ,
            mobile : yup.string().required().matches(/\d{10}/ , 'invalid number')
        })

        const submit = (values) => {
            console.log(values);
        }


return(
    <div>

        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={submit}>

            <Form>
                <dl>
                    <dt> Name </dt>
                    <dd>
                        <Field type='text' name='userName' />
                    </dd>
                    <dd>
                        <ErrorMessage name='userName' />
                    </dd>

                    <dt> Age </dt>
                    <dd>
                        <Field type='number' name='age' />
                    </dd>
                    <dd>
                        <ErrorMessage name="age" />
                    </dd>

                    <dt> Mobile </dt>
                    <dd>
                        <Field type='text' name='mobile' />
                    </dd>
                    <dd>
                        <ErrorMessage name="mobile" />
                    </dd>
                </dl>

                <button type="submit" className="btn btn-primary"> Register </button>
            </Form>
        </Formik>
    </div>
)

}
    

