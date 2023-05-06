export function Error({ error }) {
  console.log(error);
  return (
    <>
      {error && (
        <span
          className={`${
            error !== "" ? "block " : "hidden"
          } text-white p-2 mt-3 bg-red-500 rounded-md capitalize w-full pl-3`}
        >
          {error}
        </span>
      )}
    </>
  );
}
