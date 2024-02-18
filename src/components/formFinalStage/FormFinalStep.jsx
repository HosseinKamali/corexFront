import "./formFinalStep.css"

const FormFinalStep = () => {
  return (
    <>
      <h1>Final step</h1>
      <h3>4-digit code has been sent to your email</h3>
      <p>fria@gmail.com</p>
      <form className="digitFinalStep">
      <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength="1" />
        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength="1" />
        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength="1" />
        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength="1" />
      </form>
      <p>if you dont recieve the code in your inbox,Please check your span</p>
      <button className="">Continue</button>
      <button>Back</button>
    </>
  );
};

export default FormFinalStep;
