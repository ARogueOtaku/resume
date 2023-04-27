import useProfileDataSelector from "@/hooks/useProfileDataSelector";

function Banner() {
  const { name, job } = useProfileDataSelector(
    (profileData) => profileData.basicInfo
  );
  return (
    <div
      id="banner"
      className="absolute left-1/2 z-10 mt-24 flex min-w-max -translate-x-1/2 flex-col gap-6 border-2 border-slate-800 bg-slate-100 px-10 py-14 text-center text-slate-800 md:my-14 md:w-1/2 lg:w-2/3"
    >
      <h1 className="text-3xl font-bold uppercase tracking-widest md:text-4xl lg:text-5xl">
        {name}
      </h1>
      <h1 className="text-base font-normal uppercase md:text-lg lg:text-xl">
        {job}
      </h1>
    </div>
  );
}

export default Banner;
