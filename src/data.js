// All data extracted from the Delta / Nadia analysis

export const kpis = {
  totalMerit: 14602,
  totalNadia: 6373,
  adoptionRate: 43.6,
  totalConversations: 50218,
  activeLast30: 2923,
  activeLast30Pct: 45.9,
  activeLast60: 3572,
  activeLast90: 4815,
  medianConvos: 3,
  meanConvos: 7.9,
  maxConvos: 486,
  usersWith10Plus: 1025,
};

export const engagementTiers = [
  { tier: 'Trial (1-2)', users: 3089, pct: 48.5, avgGoals: 0.2, teamsPct: 24, calPct: 12 },
  { tier: 'Light (3-5)', users: 1577, pct: 24.7, avgGoals: 0.6, teamsPct: 51, calPct: 31 },
  { tier: 'Moderate (6-10)', users: 764, pct: 12.0, avgGoals: 0.8, teamsPct: 62, calPct: 37 },
  { tier: 'Active (11-20)', users: 439, pct: 6.9, avgGoals: 0.8, teamsPct: 68, calPct: 42 },
  { tier: 'Power (21+)', users: 504, pct: 7.9, avgGoals: 0.9, teamsPct: 64, calPct: 44 },
];

export const integrationEffect = [
  { label: 'Both Teams + Calendar', users: 1403, avgConvos: 12.2 },
  { label: 'Teams Only', users: 1229, avgConvos: 9.5 },
  { label: 'Calendar Only', users: 169, avgConvos: 8.0 },
  { label: 'Neither', users: 3572, avgConvos: 5.3 },
];

export const retentionVsChurn = [
  { label: 'Retained (<90d)', count: 4815, pct: 75.6, avgConvos: 9.6, teamsPct: 51, calPct: 31, goalsPct: 46 },
  { label: 'Churned (>90d)', count: 1558, pct: 24.4, avgConvos: 2.5, teamsPct: 12, calPct: 6, goalsPct: 0 },
];

export const buData = [
  { bu: 'HR & Labor', pop: 549, nadia: 456, rate: 83.1, avgConvos: 11.2, median: 4, teamsPct: 48, active30Pct: 57 },
  { bu: 'Legal', pop: 77, nadia: 61, rate: 79.2, avgConvos: 4.8, median: 3, teamsPct: 66, active30Pct: 90 },
  { bu: 'Reservations & Cust. Care', pop: 369, nadia: 247, rate: 66.9, avgConvos: 20.1, median: 6, teamsPct: 56, active30Pct: 59 },
  { bu: 'Revenue Management', pop: 333, nadia: 214, rate: 64.3, avgConvos: 7.4, median: 3, teamsPct: 52, active30Pct: 56 },
  { bu: 'Inflight Services', pop: 722, nadia: 432, rate: 59.8, avgConvos: 12.0, median: 3, teamsPct: 49, active30Pct: 53 },
  { bu: 'Airport Customer Service', pop: 1719, nadia: 957, rate: 55.7, avgConvos: 10.5, median: 3, teamsPct: 34, active30Pct: 43 },
  { bu: 'Cargo', pop: 153, nadia: 80, rate: 52.3, avgConvos: 13.8, median: 4, teamsPct: 42, active30Pct: 56 },
  { bu: 'Global Sales', pop: 887, nadia: 478, rate: 53.9, avgConvos: 8.5, median: 3, teamsPct: 42, active30Pct: 39 },
  { bu: 'Customer Eng. & Loyalty', pop: 127, nadia: 63, rate: 49.6, avgConvos: 5.5, median: 3, teamsPct: 41, active30Pct: 44 },
  { bu: 'Network Planning', pop: 119, nadia: 55, rate: 46.2, avgConvos: 3.7, median: 2, teamsPct: 42, active30Pct: 42 },
  { bu: 'On-Board Services', pop: 261, nadia: 112, rate: 42.9, avgConvos: 7.1, median: 2, teamsPct: 37, active30Pct: 34 },
  { bu: 'Enterprise Digital Strategy', pop: 207, nadia: 89, rate: 43.0, avgConvos: 4.4, median: 2, teamsPct: 46, active30Pct: 46 },
  { bu: 'Finance', pop: 484, nadia: 183, rate: 37.8, avgConvos: 3.6, median: 2, teamsPct: 40, active30Pct: 52 },
  { bu: 'Information Technology', pop: 2099, nadia: 705, rate: 33.6, avgConvos: 4.5, median: 2, teamsPct: 40, active30Pct: 27 },
  { bu: 'TechOps', pop: 2331, nadia: 719, rate: 30.8, avgConvos: 5.5, median: 2, teamsPct: 35, active30Pct: 43 },
  { bu: 'GTH Information Technology', pop: 740, nadia: 208, rate: 28.1, avgConvos: 3.2, median: 2, teamsPct: 31, active30Pct: 15 },
  { bu: 'DLV Operations', pop: 408, nadia: 60, rate: 14.7, avgConvos: 25.8, median: 6, teamsPct: 70, active30Pct: 65 },
  { bu: 'Delta Professional Services', pop: 450, nadia: 22, rate: 4.9, avgConvos: 3.3, median: 2, teamsPct: 50, active30Pct: 45 },
];

export const gradeData = [
  { grade: '1-2', pop: 365, rate: 4.1, avgConvos: 2.3, trialPct: 91, powerPct: 9 },
  { grade: '3-4', pop: 268, rate: 38.4, avgConvos: 3.9, trialPct: 50, powerPct: 3 },
  { grade: '5', pop: 834, rate: 32.5, avgConvos: 7.5, trialPct: 58, powerPct: 11 },
  { grade: '6', pop: 2189, rate: 34.4, avgConvos: 7.3, trialPct: 54, powerPct: 12 },
  { grade: '7', pop: 2296, rate: 38.0, avgConvos: 6.2, trialPct: 53, powerPct: 11 },
  { grade: '7S', pop: 1324, rate: 60.6, avgConvos: 11.5, trialPct: 42, powerPct: 23 },
  { grade: '8', pop: 1237, rate: 52.1, avgConvos: 8.7, trialPct: 41, powerPct: 17 },
  { grade: '9', pop: 1994, rate: 34.5, avgConvos: 4.9, trialPct: 63, powerPct: 7 },
  { grade: '9S', pop: 167, rate: 47.3, avgConvos: 8.2, trialPct: 47, powerPct: 15 },
  { grade: '10', pop: 1942, rate: 53.4, avgConvos: 10.5, trialPct: 40, powerPct: 21 },
  { grade: '11', pop: 804, rate: 54.5, avgConvos: 8.4, trialPct: 40, powerPct: 18 },
  { grade: '12', pop: 330, rate: 53.3, avgConvos: 5.4, trialPct: 43, powerPct: 10 },
  { grade: '13', pop: 169, rate: 49.1, avgConvos: 5.9, trialPct: 36, powerPct: 14 },
  { grade: '14+', pop: 127, rate: 25.2, avgConvos: 2.7, trialPct: 59, powerPct: 0 },
];

export const careerLevelData = [
  { level: 'Frontline Leader (No TechOps)', pop: 1501, rate: 61.1, avgConvos: 11.5 },
  { level: 'Sr. Manager', pop: 1457, rate: 58.5, avgConvos: 11.8 },
  { level: 'Manager', pop: 695, rate: 54.8, avgConvos: 9.9 },
  { level: 'General Manager', pop: 740, rate: 54.6, avgConvos: 8.9 },
  { level: 'Director', pop: 325, rate: 53.2, avgConvos: 5.4 },
  { level: 'Lead/Adv. Specialist', pop: 478, rate: 47.9, avgConvos: 7.1 },
  { level: 'Managing Director', pop: 168, rate: 49.4, avgConvos: 5.9 },
  { level: 'Frontline Leader (TechOps)', pop: 173, rate: 45.7, avgConvos: 8.2 },
  { level: 'VP', pop: 57, rate: 42.1, avgConvos: 3.2 },
  { level: 'Specialist', pop: 2016, rate: 38.2, avgConvos: 5.8 },
  { level: 'Advanced Specialist', pop: 1977, rate: 34.3, avgConvos: 4.9 },
  { level: 'Sr. Analyst', pop: 1246, rate: 32.9, avgConvos: 6.9 },
  { level: 'Analyst', pop: 363, rate: 31.1, avgConvos: 6.1 },
  { level: 'Sr. VP', pop: 30, rate: 23.3, avgConvos: 1.6 },
];

export const subFamilyData = [
  { sf: 'Customer Contact Center', pop: 162, rate: 79.0, avgConvos: 21.2, powerPct: 45 },
  { sf: 'Talent Management', pop: 40, rate: 92.5, avgConvos: 21.0, powerPct: 51 },
  { sf: 'Training Design', pop: 156, rate: 65.4, avgConvos: 17.6, powerPct: 25 },
  { sf: 'Business Ops Strategy', pop: 177, rate: 48.0, avgConvos: 13.1, powerPct: 19 },
  { sf: 'Field Operations', pop: 65, rate: 53.8, avgConvos: 13.2, powerPct: 20 },
  { sf: 'Employee Health & Safety', pop: 171, rate: 50.9, avgConvos: 12.3, powerPct: 23 },
  { sf: 'Inflight Services', pop: 365, rate: 65.8, avgConvos: 12.0, powerPct: 24 },
  { sf: 'Cargo', pop: 83, rate: 57.8, avgConvos: 11.6, powerPct: 23 },
  { sf: 'Airport Operations', pop: 1473, rate: 56.2, avgConvos: 10.9, powerPct: 20 },
  { sf: 'Crew Scheduling & Tracking', pop: 173, rate: 13.3, avgConvos: 10.2, powerPct: 4 },
  { sf: 'Account Mgmt & Field Sales', pop: 409, rate: 53.3, avgConvos: 9.9, powerPct: 19 },
  { sf: 'Software Product Engineering', pop: 911, rate: 33.8, avgConvos: 3.7, powerPct: 6 },
];

export const fllData = {
  fllInNadia: 1373, fllAvgConvos: 10.2, fllTeams: 37,
  scaleInNadia: 4646, scaleAvgConvos: 7.4, scaleTeams: 41,
  connectUsers: 61, connectAvgConvos: 31.1,
  noConnectUsers: 1312, noConnectAvgConvos: 9.3,
  fllByBu: [
    { bu: 'Reservations & Cust. Care', total: 119, nadia: 96, rate: 80.7 },
    { bu: 'Inflight Services', total: 336, nadia: 209, rate: 62.2 },
    { bu: 'Airport Customer Service', total: 950, nadia: 566, rate: 59.6 },
    { bu: 'Cargo', total: 57, nadia: 28, rate: 49.1 },
    { bu: 'TechOps', total: 180, nadia: 80, rate: 44.4 },
  ],
};

export const beyondPerfMgmt = {
  withGoals: { count: 2211, pct: 34.7, avgConvos: 11.0 },
  withoutGoals: { count: 4162, pct: 65.3, avgConvos: 6.2 },
  organicCoaching: { count: 1748, pct: 27.4 },
  trialOnly: { count: 2414, pct: 37.9 },
};

export const skillsExhibited = [
  { skill: 'Communication', count: 4033 },
  { skill: 'Strategic Thinking', count: 1660 },
  { skill: 'Accountability', count: 1197 },
  { skill: 'Managing Performance', count: 790 },
  { skill: 'Decision Making', count: 761 },
  { skill: 'Analytical Skills', count: 697 },
  { skill: 'Digital Fluency', count: 650 },
  { skill: 'Organizational Skills', count: 568 },
  { skill: 'Developing Others', count: 531 },
  { skill: 'Emotional Intelligence', count: 486 },
];

export const skillGaps = [
  { skill: 'Influencing Skills', exhibited: 168, opportunity: 553, ratio: 3.29 },
  { skill: 'Digital Fluency', exhibited: 650, opportunity: 519, ratio: 0.80 },
  { skill: 'Adaptability', exhibited: 157, opportunity: 124, ratio: 0.79 },
  { skill: 'Emotional Intelligence', exhibited: 486, opportunity: 372, ratio: 0.77 },
  { skill: 'Developing Others', exhibited: 531, opportunity: 402, ratio: 0.76 },
  { skill: 'Servant Leadership', exhibited: 209, opportunity: 135, ratio: 0.65 },
  { skill: 'Managing Performance', exhibited: 790, opportunity: 450, ratio: 0.57 },
  { skill: 'Accountability', exhibited: 1197, opportunity: 652, ratio: 0.54 },
  { skill: 'Communication', exhibited: 4033, opportunity: 1760, ratio: 0.44 },
];

export const skillsByPopulation = {
  corporateManagers: {
    exhibited: ['Communication (2,000)', 'Strategic Thinking (1,332)', 'Accountability (676)', 'Managing Performance (593)', 'Decision Making (586)'],
    opportunity: ['Communication (1,000)', 'Influencing Skills (438)', 'Strategic Thinking (400)', 'Accountability (344)', 'Developing Others (300)'],
  },
  frontlineLeaders: {
    exhibited: ['Communication (889)', 'Accountability (272)', 'Strategic Thinking (254)', 'Managing Performance (176)', 'Digital Fluency (135)'],
    opportunity: ['Communication (348)', 'Accountability (155)', 'Managing Performance (130)', 'Strategic Thinking (122)', 'Digital Fluency (101)'],
  },
  scaleICs: {
    exhibited: ['Communication (899)', 'Analytical Skills (547)', 'Organizational Skills (424)', 'Detail Oriented (328)', 'Teamwork (245)'],
    opportunity: ['Communication (339)', 'Organizational Skills (201)', 'Teamwork (129)', 'Accountability (127)', 'Digital Fluency (105)'],
  },
};

export const skillsByGradeBand = [
  { band: 'Entry (1-4)', opp: ['Communication', 'Org. Skills', 'Accountability', 'Analytical', 'Emotional Intel.'] },
  { band: 'Mid (5-7)', opp: ['Communication', 'Digital Fluency', 'Accountability', 'Strategic Thinking', 'Org. Skills'] },
  { band: 'Senior (8-10)', opp: ['Communication', 'Influencing', 'Accountability', 'Strategic Thinking', 'Managing Perf.'] },
  { band: 'Leadership (11-13)', opp: ['Communication', 'Accountability', 'Strategic Thinking', 'Influencing', 'Developing Others'] },
  { band: 'Executive (14+)', opp: ['Influencing', 'Strategic Thinking', 'Accountability', 'Communication', 'Developing Others'] },
];

export const goalQuality = [
  { gap: 'No Time Specificity', pct: 90.0, count: 1821 },
  { gap: 'Goals Not Measurable', pct: 61.9, count: 1252 },
  { gap: 'Non-Specific Goals', pct: 27.5, count: 557 },
  { gap: 'Not Achievable', pct: 0.1, count: 2 },
];

export const goalBarriersByBu = [
  { bu: 'Airport Customer Service', b1: 'Resource/Capacity (28)', b2: 'Knowledge/Skill (14)' },
  { bu: 'TechOps', b1: 'Resource/Capacity (22)', b2: 'Org Structure (17)' },
  { bu: 'HR & Labor', b1: 'Org Structure (18)', b2: 'Resource/Capacity (16)' },
  { bu: 'Information Technology', b1: 'Knowledge/Skill (12)', b2: 'Org Structure (11)' },
  { bu: 'Inflight Services', b1: 'Resource/Capacity (15)', b2: 'Collaboration (14)' },
  { bu: 'Global Sales', b1: 'Resource/Capacity (13)', b2: 'Org Structure (9)' },
];

export const targetedCohorts = [
  { cohort: 'GTM Participants', total: 55, nadia: 54, rate: 98.2, avgConvos: 19.8 },
  { cohort: 'DLA Participants', total: 81, nadia: 74, rate: 91.4, avgConvos: 32.0 },
  { cohort: 'Learning', total: 142, nadia: 124, rate: 87.3, avgConvos: 17.9 },
  { cohort: 'HRBP', total: 103, nadia: 87, rate: 84.5, avgConvos: 10.2 },
  { cohort: 'SysOps & HRSD', total: 168, nadia: 141, rate: 83.9, avgConvos: 14.6 },
  { cohort: 'Valence PoC', total: 47, nadia: 39, rate: 83.0, avgConvos: 18.5 },
  { cohort: 'IFS-OBS Grade 8+', total: 201, nadia: 137, rate: 68.2, avgConvos: 13.8 },
  { cohort: 'General Merit', total: 13095, nadia: 4993, rate: 38.1, avgConvos: 6.6 },
];

export const monthlyActivity = [
  { month: '2024-12', users: 50 },
  { month: '2025-01', users: 7 },
  { month: '2025-02', users: 65 },
  { month: '2025-03', users: 16 },
  { month: '2025-04', users: 5 },
  { month: '2025-05', users: 13 },
  { month: '2025-06', users: 183 },
  { month: '2025-07', users: 540 },
  { month: '2025-08', users: 110 },
  { month: '2025-09', users: 136 },
  { month: '2025-10', users: 83 },
  { month: '2025-11', users: 190 },
  { month: '2025-12', users: 1210 },
  { month: '2026-01', users: 680 },
  { month: '2026-02', users: 3082 },
];

export const activationFormula = [
  { dimension: 'Teams Connected', high: 66, low: 24 },
  { dimension: 'Calendar Connected', high: 43, low: 12 },
  { dimension: 'Manager %', high: 73, low: 67 },
  { dimension: 'Frontline Leader %', high: 28, low: 21 },
];

export const stationData = [
  { station: 'ATL Admin Center', pop: 4755, nadia: 2182, rate: 45.9, avgConvos: 6.6 },
  { station: 'ATL Airport', pop: 633, nadia: 310, rate: 49.0, avgConvos: 15.1 },
  { station: 'ATL Bldg A A1 B', pop: 195, nadia: 104, rate: 53.3, avgConvos: 16.9 },
  { station: 'ATL Res Center', pop: 75, nadia: 59, rate: 78.7, avgConvos: 18.1 },
  { station: 'MSP Minneapolis', pop: 229, nadia: 134, rate: 58.5, avgConvos: 9.0 },
  { station: 'JFK New York', pop: 256, nadia: 133, rate: 52.0, avgConvos: 7.1 },
  { station: 'BLR Bangalore', pop: 740, nadia: 208, rate: 28.1, avgConvos: 3.2 },
  { station: 'MOT Minot DLV', pop: 174, nadia: 51, rate: 29.3, avgConvos: 19.3 },
  { station: 'SLC Salt Lake City', pop: 174, nadia: 93, rate: 53.4, avgConvos: 8.5 },
  { station: 'DTW Detroit', pop: 219, nadia: 99, rate: 45.2, avgConvos: 8.3 },
  { station: 'BOS Boston', pop: 117, nadia: 65, rate: 55.6, avgConvos: 7.6 },
  { station: 'LAX Los Angeles', pop: 201, nadia: 90, rate: 44.8, avgConvos: 7.9 },
];
