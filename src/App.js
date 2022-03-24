import "./styles.css";
import{useFormik}from"formik";

export default function App() {
  const formik =useFormik({
    initialValues:{
      name:"",
      password:"",
      email:"",
    },
  onSubmit:(values)=>{
    alert("accecpted");
  },
  validate: (values)=>{
    var errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 8) {
      errors.password = "Must be 8 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    
    
    
        return errors;
  }
  });
  return (
          <form onSubmit={formik.handleSubmit}>
            <label>Username</label>
            <input id='name' type='text'
            onChange={formik.handleChange} 
            value={formik.values.name }  />
            {formik.errors ? formik.errors.name:null}
      
      <div>
      <label htmlFor="email"></label>

    Email:
    <input 
    id="name" 
    type="text" 
    name="email" 
    value={formik.values.email}
  onChange={formik.handleChange}/>
  {formik.errors ? formik.errors.email:null}
  </div>
  <div>
            <label>Password</label>
            <input id='password' type='password'
            onChange={formik.handleChange} 
            value={formik.values.password } />
              {formik.errors ? formik.errors.password:null}
          </div>
      
  
     
    
 
   <button type="submit">submit</button>
   </form>
  );
  }