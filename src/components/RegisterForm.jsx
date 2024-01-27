import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function RegisterForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        registerCheckBox: false
    });
    const [errors, setErrors] = useState({
        name: null,
        username: null,
        email: null,
        mobile: null,
        registerCheckBox: null
    });

    const navigate = useNavigate();
    const handleSubmit = () => {
        let isError = false;
        //Name input validation
        if(formValues.name.trim().length === 0){
            setErrors((prev) => {
                return {...prev, name:"Name Required"};
            });
            isError = true;
        }
        else{
            setErrors((prev) => {
                return {...prev, name:null};
            });  
        }

        //Username input validation
        if(formValues.username.trim().length === 0){
            setErrors((prev) => {
                return {...prev, username:"Username Required"};
            });
            isError = true;
        }
        else{
            setErrors((prev) => {
                return {...prev, username:null};
            });  
        }

        //Email input validation
        if(formValues.email.trim().length === 0){
            setErrors((prev) => {
                return {...prev, email:"Email Required"};
            });
            isError = true;
        }
        else{
            setErrors((prev) => {
                return {...prev, email:null};
            }); 
        }

        //Mobile input validation
        if(formValues.mobile.trim().length === 0){
            setErrors((prev) => {
                return {...prev, mobile:"Mobile Required"};
            });
            isError = true;
        }
        else{
            setErrors((prev) => {
                return {...prev, mobile:null};
            });  
        }

        //RegiterCheckBox validation
        if(formValues.registerCheckBox === false){
            setErrors((prev) => {
                return {...prev, registerCheckBox:"Please check the box"};
            });
            isError = true;
        }
        else{
            setErrors((prev) => {
                return {...prev, registerCheckBox:null};
            });
        }

        if(isError){
            return;
        }
        else{
            navigate("/info");
        }

    };
    return (
        <div 
            style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                gap: "8px", 
                flexDirection: "column"
            }}>
        <input
            value={formValues.name} 
                onChange={(e) => {
                     setFormValues((prev) => {
                         return { ...prev, name: e.target.value };
                        });
                    }}
            type="text" 
            placeholder="Name" 
        />
        <p>{errors.name}</p>
        <br />
        <input value={formValues.username} onChange={(e) => { setFormValues((prev) => { return { ...prev, username: e.target.value }; }); }} type="text" placeholder="Username" /> <br />
        <p>{errors.username}</p>
        <input value={formValues.email} onChange={(e) => { setFormValues((prev) => { return { ...prev, email: e.target.value }; }); }} type="text" placeholder="Email" /> <br />
        <p>{errors.email}</p>
        <input value={formValues.mobile} onChange={(e) => { setFormValues((prev) => { return { ...prev, mobile: e.target.value }; }); }} type="text" placeholder="Mobile" /> <br />
        <p>{errors.mobile}</p>
        <br />
        <label htmlFor="registerCheckBox">
            <input checked={formValues.registerCheckBox}
             id="registerCheckBox" 
             type="checkbox" 
             name="registerCheckBox"
            onChange={(e) => {
                 setFormValues((prev) => {
                     return { ...prev, registerCheckBox: e.target.checked }; 
                     }); 
                    }} 
                />
            Share my registration data with Super App
        </label>
        <p>{errors.registerCheckBox}</p>
        <button 
            onClick= {handleSubmit} 
            style={{border: "none", padding: "6px", background: "skyblue" }}>Sign Up</button>
    </div>
    );
}