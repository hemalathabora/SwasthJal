// src/services/mockData.js
export const alerts = [
  { id: 'a1', village: 'Sadiya', risk: 82, advice: 'Boil water before drinking', time: '2025-09-20' },
  { id: 'a2', village: 'Dhemaji', risk: 45, advice: 'Use water filter; avoid open water', time: '2025-09-18' },
  { id: 'a3', village: 'Kokrajhar', risk: 28, advice: 'Monitor children for diarrhea', time: '2025-09-15' }
];

export const reports = [
  { id: 'r1', village: 'Sadiya', symptoms: ['diarrhea','fever'], water: 'turbid', time: '2025-09-20' },
  { id: 'r2', village: 'Dhemaji', symptoms: ['vomiting'], water: 'foul', time: '2025-09-18' },
  { id: 'r3', village: 'Kokrajhar', symptoms: ['fever'], water: 'clean', time: '2025-09-15' }
];

export const hotspots = [
  { id: 'h1', village: 'Sadiya', lat: 27.3, lng: 95.1, risk: 82, reports: 12 },
  { id: 'h2', village: 'Dhemaji', lat: 27.1, lng: 94.9, risk: 45, reports: 5 },
  { id: 'h3', village: 'Kokrajhar', lat: 26.4, lng: 90.3, risk: 28, reports: 3 },
];

export const stats = {
  accuracy: 95,
  communities: 10400,
  monitoring: '24/7'
};
