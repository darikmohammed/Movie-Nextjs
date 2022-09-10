import Title from "./Title";

function Layout({ children }) {
  return (
    <div>
      <Title title="Breaking Bad!" />
      {children}
    </div>
  );
}

export default Layout;
