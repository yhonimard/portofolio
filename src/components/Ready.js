import hr from "../assets/curve-hr.svg";

export default function Honors() {
  return (
    <div className="mt-4 text-white">
      <div className="flex justify-center flex-col items-center gap-y-7">
        <h1 className="text-2xl font-bold">Iam ready for work or freelance</h1>
        <a
          href="https://wa.me/6285694555246"
          rel="noreferrer"
          target="_blank"
          className=" bg-teal-500 rounded-full px-4 py-2  border-teal-800  border-4"
        >
          WhatsApp
        </a>
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
