import React from "react"
import Link from "next/link"
export default function Nav() {
  return (
    <div className="navbar bg-transparent ">
  <div className="flex-1 ">
    <Link href="/" className="btn btn-ghost text-xl pt-3" >Souvik</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="#personalinfo" className="text-lg pt-3" >Commander's Info</Link></li>
      <li>
        {/* <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details> */}
        <Link href="/project" className="text-lg pt-3" >Project Station</Link>
      </li>
      <li><Link href="/connect" className="text-lg border-2 border-gray-400 rounded-lg p-3" >Connect</Link></li>
    </ul>
  </div>
</div>
  );
}
