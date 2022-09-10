import Title from "./Title";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Title title="Breaking Bad!" />
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
