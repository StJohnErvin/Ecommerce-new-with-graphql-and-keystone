import Link from "next/link";


export default function Nav() {
  return (
    <nav>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/account">
        <a>Accounts</a>
      </Link>
    </nav>
  );
}
