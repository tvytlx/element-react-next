import { MDXProvider } from "@mdx-js/react";

export default function StyledMDX({ children }) {
  return (
    <MDXProvider
      components={{
        p: (props) => <p {...props} style={{ color: "rebeccapurple" }} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}
