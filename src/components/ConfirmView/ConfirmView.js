import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/operations";
import { Link } from "react-router-dom";
import selectors from "../../redux/selectors";
import s from "./ConfirmView.module.css";

function ConfirmView() {
  const email = useSelector(selectors.getUserEmail);
  const dispatch = useDispatch();

  const OnResendEmail = () => {
    dispatch(operations.repeatEmailVerify({ email }));
  };

  return (
    <div className={s.content}>
      <h1>
        Please check your email<span className={s.mail}>({email})</span> <br />{" "}
        to confirm your account.
      </h1>
      <hr />
      <div className={s.contentText}>
        <p>
          If <span className={s.mail}>({email})</span> is not your email
          address, please{" "}
          <Link className={s.link} to="/">
            Go Back
          </Link>{" "}
          and enter the correct one.
        </p>
        <p>
          If you haven't received our email in 5 minutes, please check your spam
          folder.
        </p>
        <p>
          If you still haven't received it, please{" "}
          <button type="button" onClick={OnResendEmail} className={s.link}>
            Resend the message
          </button>
        </p>
      </div>
    </div>
  );
}
export default ConfirmView;