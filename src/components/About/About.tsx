import { useNavigate } from "react-router-dom";
import { otroToast } from "../../elements/hotToast/hotToast";
import { Toaster } from "react-hot-toast";

const About = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        otroToast('Redirigiendo a Home');
        setTimeout(() => {
            navigate('/');
        }, 1500);
    }

    return (
        <div>
            About
            <button onClick={handleBack}>Back</button>
            <Toaster />

        </div>
    );
}

export default About;
