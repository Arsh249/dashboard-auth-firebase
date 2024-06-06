import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "./firebase";
import { toast } from "react-toastify";

export const passwordRegexp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmitForm = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log("User Signup Successfully");
            setTimeout(() =>{
                window.location.href = "login";
               },2000);
            
            toast.success("User Signup Successfull!" , {position: "top-center"})
        } 
        catch (error) {
            console.log(error.message);
            toast.error(error.message, {position: "bottom-center"})
        }
    }

  return (
    <div className="form">
        <Form onFinish={onSubmitForm} layout="vertical">
            <Form.Item name="name" label="Name" rules={[{required: true, message: "Please enter your name"}]}>
                <Input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{type:"email", message:"Please enter valid email"}, {required: true, message: "Please enter email"}]}>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
           
            <Form.Item label="Password" name="password" rules={[{required: true, message: "Please enter your password"},{
              pattern: passwordRegexp,
              message: "Inavlid password",
            },]}>
                <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <Button htmlType="submit" type="primary" block>Signup</Button>
            
        </Form>
        <p>Already have an account?{" "} <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup;