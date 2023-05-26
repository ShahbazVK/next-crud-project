import Layout from '../components/Layout'
import Create from '../components/Create'
import GetDetails from '../components/GetDetails'
import axios from 'axios'

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div style={{ marginLeft: '4rem' }}>
        <Create />
        <br />
        <br />
        <GetDetails />
      </div>
    </Layout>
  )
}