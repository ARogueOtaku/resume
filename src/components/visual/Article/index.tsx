import { ReactNode } from "react";

interface IArticleProps {
  header: ReactNode;
  subheader?: ReactNode;
  headerRight?: ReactNode;
  points: string[];
  footerLeft?: ReactNode;
  footerRight?: ReactNode;
}

function Article({
  header,
  subheader,
  headerRight,
  points,
  footerLeft,
  footerRight,
}: IArticleProps) {
  return (
    <article className="my-4 break-inside-avoid text-sm print:py-2 md:text-base">
      <header className="flex items-center gap-2 md:items-start">
        <div className="flex grow flex-col">
          <h2 className="text-base font-bold md:text-lg">{header}</h2>
          {subheader ? <h3>{subheader}</h3> : null}
        </div>
        {headerRight ? (
          <div className="text-right text-xs leading-6 md:text-sm md:leading-7">
            {headerRight}
          </div>
        ) : null}
      </header>
      <div className="mt-4 flex flex-col gap-4">
        {points.map((point, idx) => (
          <span key={idx}>{point}</span>
        ))}
      </div>
      {footerLeft || footerRight ? (
        <footer className="mt-4 flex justify-between gap-2">
          {footerLeft ? footerLeft : null}
          {footerRight ? footerRight : null}
        </footer>
      ) : null}
    </article>
  );
}

export default Article;
