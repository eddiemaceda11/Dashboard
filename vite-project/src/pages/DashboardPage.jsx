import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../components/Dashboard/Header/Header";
import Tasks from "../components/Dashboard/Tasks/Tasks";
import Charts from "../components/Dashboard/Charts/Charts";
import Apps from "../components/Dashboard/Apps/Apps";

import TaskModal from "../components/Dashboard/Tasks/TaskModal/TaskModal";

import "./DashboardPage.css";
import { useState } from "react";

export default function DashboardPage() {
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <div className="dashboard-right-side">
            <DashboardHeader />
            <Tasks />
            <div className="features">
              <Charts />
              <Apps />
            </div>
          </div>
        </div>
      </div>
      {showTaskModal && <TaskModal />}
    </>
  );
}