import 'bootstrap/dist/css/bootstrap.css'

import AcceptedProfilesLink from '@/components/AcceptedProfilesLink'
import Header from "@/components/Header"
import ProfileCard from "@/components/ProfileCard"
import SwipeBar from "@/components/SwipeBar"
import { StunterProvider } from '@/context/state'


const Home: React.FC = () => {

  return (
    <StunterProvider>

      <div className="container text-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-5">
            <Header />
            <main>
              <ProfileCard />
              <SwipeBar />
              <AcceptedProfilesLink />
            </main>
          </div>
        </div>
      </div>

    </StunterProvider>
  )
}



export default Home