import { Link, useNavigate } from "react-router-dom";
import { VerifyEmailContainer } from "./VerifyEmail.style";
import { useState, useEffect, useCallback } from "react";
import { sendEmailVerification } from "firebase/auth";
import { useAuthContext } from "../../contexts";

export function VerifyEmail() {
    
    const [isResendEmail, setIsResendEmail] = useState(false);
    const { authState } = useAuthContext();
    const [seconds, setSeconds] = useState(0);
    const user = authState.currentUser;
    var isWaiting = !user || seconds > 0;
    const navigate = useNavigate();

    if (user) {
        if (user.emailVerified) {
            navigate("/feed");
        }
    }



  const sendVerificationMail = useCallback(async () => {
    sendEmailVerification(user);
    sendEmailVerification(user!)
      .then(() => {
        setIsResendEmail(true);
        setSeconds(60);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [seconds, user]);

  const onButtonClick = useCallback(() => {
    if (!user) {
      return;
    }
    sendVerificationMail();
  }, [user, sendVerificationMail]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <VerifyEmailContainer>
      <h2>Verify your email</h2>
      {!isResendEmail && (
        <p>
          Your email address{" "}
          {user &&
            `${user?.email?.split(".")[0].slice(0, 2)}********.${
              user?.email?.split(".")[1]
            }`}{" "}
          has not been verified. Click the button below to send a verification
          email to your email address.
        </p>
      )}
      {isResendEmail && (
        <p>
          We have sent you an email with a link to verify your email address.
          Please check your inbox and click on the link to verify your email
          address.
        </p>
      )}
      {isResendEmail && (
        <p>
          Didn't get the email?{" "}
          {isWaiting
            ? `You can resend in ${seconds} second${seconds > 1 ? "s" : ""}.`
            : null}
        </p>
      )}
      <button disabled={isWaiting} onClick={onButtonClick}>
        {isResendEmail ? "Resend email" : "Verify email"}
      </button>
      <p>
        Refresh this page once you have verified your email address.
      </p>
    </VerifyEmailContainer>
  );
}
