function Link({
  label,
  url,
  sameTab = false,
}: {
  label: string;
  url: string;
  sameTab?: boolean;
}) {
  return (
    <a
      href={url}
      target={sameTab ? "_self" : "_blank"}
      className="mb-1 w-fit underline hover:opacity-80"
    >
      {label}
    </a>
  );
}

export default Link;
