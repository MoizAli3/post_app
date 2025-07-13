
function AvatarComp({name}) {
  const avater =
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
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
