import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 w-full p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
