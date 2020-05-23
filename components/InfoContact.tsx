import React from "react";
import Link from "next/link";

export const InfoContact: React.FC = () => (
  <div className="mb-2">
    <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 text-black bg-white hover:bg-white">
      <div className="flex-auto">Webエンジニアなんだ。仕事頼みたいんだけどどうしたらいいかな？</div>
    </div>
    <div className="p-2 text-justify text-left text-gray-800 mb-5 bg-white" style={{}}>
      <Link href="/profile"><a className="underline font-medium text-lg">Webエンジニアとしてのプロフィール</a></Link>をまとめてありますので、こちらを一読の上ご連絡をお待ちしております。連絡をしたい場合は<Link href="/contact"><a className="underline font-medium text-lg">お問い合わせ</a></Link>からご連絡下さい。
    </div>
  </div>
)
