import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, onSubmit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        className={methods.formState.isSubmitted ? "submitted" : ""}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
