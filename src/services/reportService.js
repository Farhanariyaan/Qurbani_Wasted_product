const STORAGE_KEY = 'kurbaniReports';

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

export const createReport = (reports, report) => [report, ...reports];

export const deleteReportById = (reports, reportId) => reports.filter((report) => report.id !== reportId);

export const updateReportById = (reports, reportId, changes) =>
  reports.map((report) => (report.id === reportId ? { ...report, ...changes } : report));
