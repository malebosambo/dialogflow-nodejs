import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const paths = ["/", "/cx", "rest-node-js"];
  const active = "Navigation_Link Selected";
  const inactive = "Navigation_Link";
  
  return (
    <>
      <div className="Navigation">
        <Link href="/" className={ paths[0] == router.pathname ? active : inactive }>ES</Link>
        <Link href="/cx" className={ paths[1] == router.pathname ? active : inactive }>CX</Link>
        <Link href="/rest-node-js" className={ paths[2] == router.pathname ? active : inactive }>NodeJS</Link>
      </div>
    </>
  )
}
