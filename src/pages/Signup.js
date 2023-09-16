import Signup from "../components/Signup";
import Headerup from "../components/Headerup";

export default function SignupPage(){
    return(
        <>
            <Headerup
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
        <Signup/>
        </>
    )}
