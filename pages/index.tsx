import React from "react"
import { Layout } from "../components/Layout"
import { Profile } from "../components/Profile"
import { InfoVoice } from "../components/InfoVoice"
import { InfoOutput } from "../components/InfoOutput"
import { InfoContact } from "../components/InfoContact"

const PagesIndex: React.FC = () => {
  return (
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
}

export default PagesIndex
