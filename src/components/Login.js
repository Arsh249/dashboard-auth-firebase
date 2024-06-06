import { Button, Form, Input } from "antd"
import { passwordRegexp } from "./Signup"
import { useState } from "react"
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async () => {
        try {
           await signInWithEmailAndPassword(auth, email, password);
           console.log("User Login Successfully");
           setTimeout(() =>{
            window.location.href = "profile";
           },2000);
           
           toast.success("User Login Successfull!" , {position: "top-center"});
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {position: "bottom-center"})
        }
    }

  return (
    <div className="form">
        
        <Form onFinish={onSubmitForm} layout="vertical">
            <Form.Item name="email" label="Email" rules={[{type:"email", message:"Please enter valid email"}, {required: true, message: "Please enter email"}]}>
                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
            
            <Form.Item label="Password" name="password" rules={[{required: true, message: "Please enter your password"},{
              pattern: passwordRegexp,
              message: "Inavlid password",
            },]}>
                <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            
            <Button htmlType="submit" type="primary" block>Login</Button>
            
        </Form>

        <p>Don't have an account?{" "} <Link to="/signup">Signup Here</Link></p>
    </div>
  )
}

export default Login