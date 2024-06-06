import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

export const NotFound = () =>{

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/");
    }

    return(
    <Result
    className="notfound"
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary" onClick={goToLogin}>Back Home</Button>}
    />

    )
}