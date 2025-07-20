import { avater } from "../costant/constant";

function AvatarComp({ name }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-15 h-15 mb-3 rounded-full border-3 border-pink-400"
        src={avater}
        alt="Rounded avatar"
      ></img>
      <p className="font-semibold text-sm text-gray-500">{name}</p>
    </div>
  );
}

export default AvatarComp;
