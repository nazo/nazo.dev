import React from "react"
import { Layout } from "../components/Layout"

const PagesContact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 pt-10 w-full">
        <div className="mx-auto max-w-6xl">
          <div className="p-2 bg-gray-100 rounded">
            <form className="form bg-white p-6 my-10 relative" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <h3 className="text-2xl text-gray-900 font-semibold">お問い合わせ</h3>
              <div className="flex space-x-5 mt-3">
                <input type="text" name="" id="" placeholder="名前" className="border p-2 w-1/2" />
                <input type="email" name="" id="" placeholder="メールアドレス" className="border p-2 w-1/2" />
              </div>
              <textarea name="" id="" cols={10} rows={10} placeholder="お問い合わせ内容" className="border p-2 mt-3 w-full"></textarea>
              <input type="submit" value="送信" className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PagesContact
