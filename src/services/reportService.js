const STORAGE_KEY = 'kurbaniReports';
const CLEANUP_STORAGE_KEY = 'kurbaniCleanupRequests';

export const loadReports = () => {
  if (typeof window === 'undefined') return [];
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.warn('Failed to parse stored reports:', error);
    return [];
  }
};

export const saveReports = (reports) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
};

export const loadCleanupRequests = () => {
  if (typeof window === 'undefined') return [];
  const stored = window.localStorage.getItem(CLEANUP_STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.warn('Failed to parse stored cleanup requests:', error);
    return [];
  }
};

export const saveCleanupRequests = (requests) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CLEANUP_STORAGE_KEY, JSON.stringify(requests));
};

export const createReport = (reports, report) => [report, ...reports];

export const deleteReportById = (reports, reportId) => reports.filter((report) => report.id !== reportId);

export const deleteCleanupRequestById = (requests, requestId) => requests.filter((request) => request.id !== requestId);

export const updateReportById = (reports, reportId, changes) =>
  reports.map((report) => (report.id === reportId ? { ...report, ...changes } : report));
