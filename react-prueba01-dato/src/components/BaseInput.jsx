const BaseInput = () => {
  return (
    <label className="flex flex-col gap-2 mb-4">
      <span className="font-normal">COMPONENTE tailwindcss</span>
      <input
        className="w-full py-4 px-5 rounded-lg bg-slate-400"
        type="text"
        name="prueba"
      />
    </label>
  );
};

export default BaseInput;
