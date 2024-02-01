import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import RecentActivity from "@/components/RecentActivity";
import Sidebar from "@/components/Sidebar";
import UpcomingSchedule from "@/components/UpcomingSchedule";

export default function Home() {
  return (
    <div className="flex">
      <div className="lg:basis-[15%] md:basis-[8%] hidden md:block min-h-[150vh] border">
        <Sidebar />
      </div>
      <div className="lg:basis-[85%] md:basis-[92%]">
        <div className="flex flex-col">
          <Navbar />
          <div className="flex lg:flex-row flex-col">
            <Dashboard />
            <div>
              <RecentActivity
                time={"10.40 AM, Fri 10 Sept 2024"}
                title={"You Posted a New Job"}
                description={
                  "Kindly check the requirements and terms of work and make sure everything is right."
                }
                activityNumber={"12"}
              />
              <UpcomingSchedule day={"Today"} date={"13 Sept 2024"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
