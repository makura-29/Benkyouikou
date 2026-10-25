
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#E8DFD4] bg-[#FFFDF8]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5"
      >
        <Link
          href="/"
          className="text-xl font-bold text-[#49372D]"
        >
          勉強いこう。
        </Link>

        <div className="flex flex-wrap gap-6 text-sm text-[#796556]">
          <Link
            href="/"
            className="hover:text-[#CD5C5C]"
          >
            Dashboard
          </Link>

          <Link
            href="/#courses"
            className="hover:text-[#CD5C5C]"
          >
            My Courses
          </Link>
        </div>
      </nav>
    </header>
  );
}
