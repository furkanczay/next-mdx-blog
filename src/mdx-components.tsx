import { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-3xl font-bold mb-4" {...props}>
      {props.children}
    </h1>
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },

  a: (props: ComponentPropsWithoutRef<"a">) => (
    <Link href={props.href ?? "#"} className="text-blue-500">
      {props.children}
    </Link>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
