import { PortableText } from "@portabletext/react";
import Card from "../components/Card/Card";

export const getCardByType = (data: any, searchString: string) => {
  const { title, body, type, slug, ptComponents, description, bio, name } =
    data;
  const processExcerpt = (
    data: { searchedQuery: { cardExcerpt: string } },
    searchString: string
  ) => {
    const excerpt = data?.searchedQuery?.cardExcerpt;
    if (Array.isArray(excerpt)) {
      const modifiedExcerpt = excerpt.find((cardExcerpt) =>
        cardExcerpt?.toLowerCase().includes(searchString?.toLowerCase())
      );

      if (modifiedExcerpt) {
        return `${modifiedExcerpt
          .replace(
            new RegExp(searchString, "gi"),
            (match: any) => `<strong>${match}</strong>`
          )
          .slice(0, 200)}...`;
      }
    } else if (excerpt) {
      return `${excerpt
        .replace(
          new RegExp(searchString, "gi"),
          (match) => `<strong>${match}</strong>`
        )
        .slice(0, 200)}...`;
    }
    return "";
  };

  switch (type) {
    case "post":
      return (
        <Card
          title={title}
          excerpt={
            data?.searchedQuery?.cardExcerpt ? (
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: processExcerpt(data, searchString),
                }}
              />
            ) : (
              <PortableText value={body} />
            )
          }
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );

    case "author":
      return (
        <Card
          title={name}
          excerpt={
            data?.searchedQuery?.cardExcerpt ? (
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: processExcerpt(data, searchString),
                }}
              />
            ) : (
              <PortableText value={bio} />
            )
          }
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );
    case "category":
      return (
        <Card
          title={title}
          excerpt={
            data?.searchedQuery?.cardExcerpt ? (
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: processExcerpt(data, searchString),
                }}
              />
            ) : (
              description
            )
          }
          type={type}
          slug={slug}
          key={slug}
          ptComponents={ptComponents}
        />
      );

    default:
      return "hello";
  }
};

export default getCardByType;
