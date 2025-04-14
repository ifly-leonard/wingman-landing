// Define download item interface
export interface DownloadItem {
  id: string;
  name: string;
  description: string;
  fileSize: string;
  downloadCount: number;
  fileType: string;
  downloadUrl: string;
}

// Export download items
export const downloads: DownloadItem[] = [
  {
    id: "setup-guide",
    name: "Setup & usage guide",
    description: "The official setup and usage guide for Wingman Logbook",    
    fileSize: "48.2 MB",
    downloadCount: 24893,
    fileType: "pdf",
    downloadUrl: "https://www.canva.com/design/DAEELdmGuV0/mvKGJGgdKrVQdrxvUxnaSA/view#1"
  },
  {
    id: "airroster-mac",
    name: "Data import format",
    description: "Wingman Data Sheet to bulk-import your flight data",    
    fileSize: "52.6 MB",
    downloadCount: 18452,
    fileType: "xlsx",
    downloadUrl: "https://docs.google.com/spreadsheets/d/1k3s6jPnYvaG-FeEcnHHPnoQITAnp1fHbEvMCYdumbQg/edit?gid=961623442#gid=961623442"
  },
  {
    id: "user-guide",
    name: "Bulk upload guidelines",
    description: "A comprehensive guide to bulk-upload your flight data",    
    fileSize: "4.8 MB",
    downloadCount: 12534,
    fileType: "pdf",
    downloadUrl: "https://www.wingmanlog.in/_files/ugd/ece1e2_96676d0291524171860fb8970732a62e.pdf"
  }
]; 