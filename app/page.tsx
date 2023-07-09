import "bootstrap/dist/css/bootstrap.css";

import { StunterProvider } from "@/context/state";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import ShowProfilesLink from "@/components/ShowProfilesLink";
import SwipeBar from "@/components/SwipeBar";

const Home: React.FC = () => {
  return (
    <StunterProvider>
      <div className="text-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-5">
            <Header />
            <main>
              <ProfileCard />
              <SwipeBar />
              <ShowProfilesLink showAcceptedUsers={true} />
              <ShowProfilesLink showAcceptedUsers={false} />
            </main>
          </div>
        </div>
      </div>
    </StunterProvider>
  );
};

export default Home;
