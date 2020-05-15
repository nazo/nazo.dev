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
        </div>
      </div>
    </div>
  </Layout>
)
