import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        This page not exist. Plase return to
        <Link href="/" legacyBehavior>
          Home
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
