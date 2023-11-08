import { PortableText } from "@portabletext/react";
import image from "next/image";
import Link from "next/link";
import React from "react";
type CardProps = {
  title: string;
  excerpt?: any;
  type: string;
  slug: string;
  ptComponents?: any;
  description?: string;
};

export const Card = ({
  title,
  excerpt,
  type,
  slug,
  description,
  ptComponents,
}: CardProps) => {
  return (
    <div className="item">
      <Link href={`/${type}/${slug?.current}`}>
        <div className="item-in">
          <h4>{title}</h4>
          <p>{type}</p>
          <div className="seperator"></div>
          {excerpt && <p>{excerpt}</p>}
          {description && <p>{description}</p>}
          <a href="#">
            Read More
            <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </Link>
    </div>
  );
};

export default Card;
