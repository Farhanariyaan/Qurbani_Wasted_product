import React, { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import CitizenHome from './screens/CitizenHome';
import MapScreen from './screens/MapScreen';
import ReportScreen from './screens/ReportScreen';
import TasksScreen from './screens/TasksScreen';
import ProfileScreen from './screens/ProfileScreen';
import CoordinatorHome from './screens/CoordinatorHome';
import VolunteerHome from './screens/VolunteerHome';
import CleanerHome from './screens/CleanerHome';
import BottomNav from './components/BottomNav';
import { reportsData as initialReports } from './data/mockData';
import { loadReports, saveReports, deleteReportById } from './services/reportService';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentRole, setCurrentRole] = useState(null);
  const [reports, setReports] = useState(() => {
    const storedReports = loadReports();
    return storedReports.length > 0 ? storedReports : initialReports;
  });

  useEffect(() => {
    saveReports(reports);
  }, [reports]);

  const addReport = (newReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  const deleteReport = (reportId) => {
    setReports((prev) => deleteReportById(prev, reportId));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen setCurrentScreen={setCurrentScreen} />;
      case 'onboarding':
        return <OnboardingScreen setCurrentScreen={setCurrentScreen} setCurrentRole={setCurrentRole} />;
      case 'home':
        if (currentRole === 'citizen' || currentRole === 'skinBuyer') return <CitizenHome setCurrentScreen={setCurrentScreen} reports={reports} onDeleteReport={deleteReport} />;
        if (currentRole === 'volunteer') return <VolunteerHome setCurrentScreen={setCurrentScreen} reports={reports} />;
        if (currentRole === 'cleaner') return <CleanerHome setCurrentScreen={setCurrentScreen} reports={reports} />;
        if (currentRole === 'coordinator') return <CoordinatorHome setCurrentScreen={setCurrentScreen} reports={reports} />;
        return <CitizenHome setCurrentScreen={setCurrentScreen} reports={reports} onDeleteReport={deleteReport} />;
      case 'map':
        return <MapScreen reports={reports} />;
      case 'report':
        return <ReportScreen setCurrentScreen={setCurrentScreen} onSubmitReport={addReport} />;
      case 'tasks':
        return <TasksScreen currentRole={currentRole} reports={reports} onDeleteReport={deleteReport} />;
      case 'profile':
        return <ProfileScreen currentRole={currentRole} setCurrentRole={setCurrentRole} setCurrentScreen={setCurrentScreen} />;
      default:
        return <CitizenHome setCurrentScreen={setCurrentScreen} />;
    }
  };

  const showBottomNav = !['splash', 'onboarding'].includes(currentScreen);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center font-sans sm:py-6">
      <div className="w-full max-w-[430px] h-[100dvh] bg-gray-50 flex flex-col relative overflow-hidden shadow-2xl sm:rounded-[36px] sm:h-[850px] sm:max-h-[95vh] sm:border-8 sm:border-gray-800">
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-gray-50 scroll-smooth">
          {renderScreen()}
        </div>

        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}

export default App;
