import Article from ".";
import Link from "../Link";

export interface IWorkArticleProps {
  headerText: string;
  subheaderText: string;
  source?: {
    label: string;
    url: string;
  };
  demo?: {
    label: string;
    url: string;
  };
  points: string[];
}

function WorkArticle({
  headerText,
  subheaderText,
  source,
  demo,
  points,
}: IWorkArticleProps) {
  return (
    <Article
      header={headerText}
      subheader={subheaderText}
      headerRight={source ? <Link {...source} /> : undefined}
      points={points}
      footerLeft={demo ? <Link {...demo} /> : undefined}
    />
  );
}

export default WorkArticle;
