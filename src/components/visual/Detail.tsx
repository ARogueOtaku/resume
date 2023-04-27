function Detail({
  headerText,
  details,
  id,
}: {
  headerText: string;
  details: string[];
  id: string;
}) {
  return (
    <div id={id} className="mt-4 flex flex-col">
      <h2 className="mb-1 text-xs font-bold uppercase">{headerText}</h2>
      {details.map((detail, idx) => (
        <span className="text-xs" key={idx}>
          {detail}
        </span>
      ))}
    </div>
  );
}

export default Detail;
