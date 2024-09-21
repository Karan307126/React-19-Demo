import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { updateNameInDb } from "../utils";
import { LoaderIcon } from "lucide-react";
import { CheckCheck } from "lucide-react";

const MyButton = ({ children, ...rest }) => {
  const { pending } = useFormStatus(); // data, action, method are available
  return (
    <button {...rest}>
      {pending ? (
        <>
          <LoaderIcon className="loader" height={"1rem"} width={"1rem"} />
          Updating
        </>
      ) : (
        children
      )}
    </button>
  );
};

const Home = () => {
  const [state, actionFunction, isPending] = useActionState(updateName, {
    name: JSON.parse(localStorage.getItem("name")) || "Anonymous user",
    error: null,
  });

  const [optimisticName, setOptimisticName] = useOptimistic(state.name);

  async function updateName(prevState, formData) {
    try {
      setOptimisticName(formData.get("name"));
      const newName = await updateNameInDb(formData.get("name"));
      return { ...prevState, name: newName, error: null };
    } catch (error) {
      return { ...prevState, error: error.message };
    }
  }

  return (
    <>
      <p className="username">
        Current user : <span>{optimisticName}</span>
        {isPending ? (
          <LoaderIcon className="loader" height={"2rem"} width={"2rem"} />
        ) : (
          <CheckCheck color="green" height={"2rem"} width={"2rem"} />
        )}
      </p>

      <p className="error">{!isPending && state.error && state.error}</p>
      <form action={actionFunction}>
        <input type="text" name="name" required />
        <MyButton type="submit">Update</MyButton>
      </form>
    </>
  );
};

export default Home;
