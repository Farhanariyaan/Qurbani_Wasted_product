export const mockUser = {
  name: "Farhan",
  ward: "Ward 12, Rajshahi",
  phone: "+880 172356890"
};

export const reportsData = [
  { id: "EID-RAJ-0241", type: "Rotting rawhide dumped", location: "Shaheb Bazar", severity: "Critical", status: "Verifying", time: "18 min ago", isDrain: false, anonymous: false, lat: 24.3670, lng: 88.6000 },
  { id: "EID-RAJ-0242", type: "Animal waste on road", location: "Talaimari", severity: "High", status: "Pending", time: "25 min ago", isDrain: false, anonymous: false, lat: 24.3735, lng: 88.6256 },
  { id: "EID-RAJ-0243", type: "Blood flowing into drain", location: "Motihar", severity: "High", status: "Assigned", time: "1 hour ago", isDrain: true, anonymous: false, lat: 24.3685, lng: 88.6360 },
  { id: "EID-RAJ-0244", type: "Blocked drain", location: "Boalia", severity: "Medium", status: "Cleaned", time: "2 hours ago", isDrain: true, anonymous: true, lat: 24.3750, lng: 88.6050 },
  { id: "EID-RAJ-0245", type: "Bad smell near mosque", location: "Dhanmondi", severity: "Medium", status: "Pending", time: "3 hours ago", isDrain: false, anonymous: false, lat: 24.3650, lng: 88.5950 },
];

export const skinBuyersData = [
  { id: 1, name: "Rahman Hides Collection", distance: "600m", status: "Available", rating: 4.7, cowPrice: "Tk 800–1100", goatPrice: "Tk 80–150", lat: 24.3700, lng: 88.6150 },
  { id: 2, name: "Boalia Rawhide Center", distance: "1.4km", status: "Busy", rating: 4.2, cowPrice: "Tk 750–1000", goatPrice: "Tk 70–120", lat: 24.3800, lng: 88.6200 },
  { id: 3, name: "Al-Huda Madrasa Donation Point", distance: "900m", type: "Charity", rating: 4.9, lat: 24.3600, lng: 88.6100 },
];

export const volunteersData = [
  { id: 1, name: "Tanvir", ward: "Ward 12", status: "Available" },
  { id: 2, name: "Ayesha", ward: "Ward 15", status: "Available" },
  { id: 3, name: "Mahin", ward: "Ward 21", status: "Offline" },
];

export const cleanerTeamsData = [
  { id: 1, name: "Boalia Cleanup Team 3", status: "Active" },
  { id: 2, name: "Rajshahi City Cleaner Van 2", status: "Active" },
  { id: 3, name: "Ward 12 Waste Unit", status: "Busy" },
];

export const awarenessFeedData = [
  { id: 1, title: "Do not throw blood into drains", desc: "Keep drains clear to prevent severe blockages during heavy rain." },
  { id: 2, title: "How to preserve rawhide with salt", desc: "Apply sufficient salt evenly within 4 hours to prevent rot." },
  { id: 3, title: "Use gloves and masks during cleanup", desc: "Protect yourself from diseases while handling raw waste." },
  { id: 4, title: "Separate bones, entrails, and general waste", desc: "Easier for municipal cleaners to collect and dispose properly." },
];
