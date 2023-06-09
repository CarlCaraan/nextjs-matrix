import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Start Navigation */}
      <nav>
        <Link href="products">Products</Link>
      </nav>
      {/* End Navigation */}
    </>
  );
}
