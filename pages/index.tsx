import Layout from '../components/layout'
import Profile from '../components/profile'
import InfoVoice from '../components/info-voice'
import InfoOutput from '../components/info-output'
import InfoContact from '../components/info-contact'

export default () => (
  <Layout>
    <div className="bg-gray-100 pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="p-2 bg-gray-100 rounded">
          <div className="flex flex-col md:flex-row">
            <Profile></Profile>
            <div className="md:w-2/3">
              <div className="p-4">
                <InfoVoice></InfoVoice>
                <InfoOutput></InfoOutput>
                <InfoContact></InfoContact>
              </div>
            </div>
          </div>
          <form className="form bg-white p-6 my-10 relative" name="contact" method="POST" data-netlify="true">
            <h3 className="text-2xl text-gray-900 font-semibold">お問い合わせ</h3>
            <div className="flex space-x-5 mt-3">
              <input type="text" name="" id="" placeholder="名前" className="border p-2  w-1/2" />
              <input type="email" name="" id="" placeholder="メールアドレス" className="border p-2 w-1/2" />
            </div>
            <textarea name="" id="" cols="10" rows="10" placeholder="お問い合わせ内容" className="border p-2 mt-3 w-full"></textarea>
            <input type="submit" value="送信" className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />
          </form>
          <div>このページのソースコードは <a href="https://github.com/nazo/nazo.dev" className="underline font-medium text-lg">https://github.com/nazo/nazo.dev</a> で公開されています。</div>
        </div>
      </div>
    </div>
  </Layout>
)
