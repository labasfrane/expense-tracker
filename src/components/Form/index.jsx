import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, onSubmit, preFill }) => {
  const methods = useForm();

  // useEffect(() => methods.reset(preFill));

  return (
    <FormProvider {...methods}>
      <form
        className={`${methods.formState.isSubmitted ? "submitted" : ""} form`}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
