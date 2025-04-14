// Define announcement banner interface
export interface AnnouncementBanner {
  enabled: boolean;
  title: string;
  message: string;
  buttonText: string;
  buttonHref: string;
  bgColor: string;
}

// Export default announcement banner data
export const announcementBanner: AnnouncementBanner = {
  "enabled": true, // This will disable the announcement banner. 
  "title": "Announcement:",
  "message": "AirRoster v2.0.7 is now live. We now support 80+ airlines around the 🌏",
  "buttonText": "Learn more",
  "buttonHref": "https://app.airroster.com?ref=landing_page",
  "bgColor": "bg-blue-600"
};
