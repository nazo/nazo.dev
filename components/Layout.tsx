import React from "react";
import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const linkClass = (path: string) => {
    return router.pathname === path ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700" : "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700";
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/images/nazo.png" alt="nazo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <Link href="/"><a className={linkClass("/")}>概要</a></Link>
                  <Link href="/profile"><a className={linkClass("/profile")}>プロフィール</a></Link>
                  <Link href="/contact"><a className={linkClass("/contact")}>お問い合わせ</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
          { children }
        </div>
      </main>
      <div>このページのソースコードは <a href="https://github.com/nazo/nazo.dev" className="underline font-medium text-lg">https://github.com/nazo/nazo.dev</a> で公開されています。</div>
    </div>
  );
}
