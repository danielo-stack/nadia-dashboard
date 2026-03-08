// All data extracted from the Delta / Nadia analysis

export const kpis = {
  totalMerit: 14602,
  totalNadia: 6373,
  adoptionRate: 43.6,
  totalConversations: 50218,
  avgConvos: 7.9,
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

export const integrationImpact = [
  { factor: 'Teams Connected', withAvg: 11.0, withUsers: 2632, withoutAvg: 5.7, withoutUsers: 3741, multiplier: '1.9x' },
  { factor: 'Calendar Connected', withAvg: 12.3, withUsers: 1572, withoutAvg: 6.4, withoutUsers: 4801, multiplier: '1.9x' },
  { factor: 'Both Integrations', withAvg: 12.2, withUsers: 1403, withoutAvg: 6.7, withoutUsers: 4970, multiplier: '1.8x' },
];

export const buData = [
  { bu: 'TechOps', pop: 2331, nadia: 719, rate: 30.8, avgConvos: 5.5, teamsPct: 35, calPct: 19 },
  { bu: 'Information Technology', pop: 2099, nadia: 705, rate: 33.6, avgConvos: 4.5, teamsPct: 40, calPct: 25 },
  { bu: 'Airport Customer Service', pop: 1719, nadia: 957, rate: 55.7, avgConvos: 10.5, teamsPct: 34, calPct: 22 },
  { bu: 'Global Sales', pop: 887, nadia: 478, rate: 53.9, avgConvos: 8.5, teamsPct: 42, calPct: 20 },
  { bu: 'GTH Information Technology', pop: 740, nadia: 208, rate: 28.1, avgConvos: 3.2, teamsPct: 31, calPct: 17 },
  { bu: 'Inflight Services', pop: 722, nadia: 432, rate: 59.8, avgConvos: 12.0, teamsPct: 49, calPct: 28 },
  { bu: 'HR & Labor', pop: 549, nadia: 456, rate: 83.1, avgConvos: 11.2, teamsPct: 48, calPct: 27 },
  { bu: 'Finance', pop: 484, nadia: 183, rate: 37.8, avgConvos: 3.6, teamsPct: 40, calPct: 26 },
  { bu: 'Delta Professional Services', pop: 450, nadia: 22, rate: 4.9, avgConvos: 3.3, teamsPct: 32, calPct: 27 },
  { bu: 'DLV Operations', pop: 408, nadia: 60, rate: 14.7, avgConvos: 25.8, teamsPct: 70, calPct: 43 },
  { bu: 'Reservations & Cust. Care', pop: 369, nadia: 247, rate: 66.9, avgConvos: 20.1, teamsPct: 56, calPct: 36 },
  { bu: 'Flight Ops', pop: 356, nadia: 82, rate: 23.0, avgConvos: 8.5, teamsPct: 40, calPct: 33 },
  { bu: 'Revenue Management', pop: 333, nadia: 214, rate: 64.3, avgConvos: 7.4, teamsPct: 52, calPct: 29 },
  { bu: 'On-Board Services', pop: 261, nadia: 112, rate: 42.9, avgConvos: 7.1, teamsPct: 37, calPct: 23 },
  { bu: 'Crew Resources', pop: 256, nadia: 72, rate: 28.1, avgConvos: 3.0, teamsPct: 25, calPct: 15 },
  { bu: 'Enterprise Digital Strategy', pop: 207, nadia: 89, rate: 43.0, avgConvos: 4.4, teamsPct: 46, calPct: 29 },
  { bu: 'Marketing & Prod Dev', pop: 204, nadia: 59, rate: 28.9, avgConvos: 6.9, teamsPct: 31, calPct: 19 },
  { bu: 'Operations Anlys & Performance', pop: 173, nadia: 49, rate: 28.3, avgConvos: 3.9, teamsPct: 29, calPct: 14 },
  { bu: 'Cargo', pop: 153, nadia: 80, rate: 52.3, avgConvos: 13.8, teamsPct: 42, calPct: 30 },
  { bu: 'Cargo Commercial', pop: 141, nadia: 32, rate: 22.7, avgConvos: 3.2, teamsPct: 41, calPct: 31 },
  { bu: 'Glbl Cleanliness Stds & Perf', pop: 139, nadia: 49, rate: 35.3, avgConvos: 3.0, teamsPct: 22, calPct: 14 },
  { bu: 'Customer Engagement & Loyalty', pop: 127, nadia: 63, rate: 49.6, avgConvos: 5.5, teamsPct: 41, calPct: 19 },
  { bu: 'Corp. Safety, Security & Compliance', pop: 126, nadia: 53, rate: 42.1, avgConvos: 6.8, teamsPct: 36, calPct: 23 },
  { bu: 'Delta Flight Products', pop: 124, nadia: 33, rate: 26.6, avgConvos: 3.6, teamsPct: 27, calPct: 33 },
  { bu: 'Network Planning', pop: 119, nadia: 55, rate: 46.2, avgConvos: 3.7, teamsPct: 40, calPct: 24 },
  { bu: 'Ops Control', pop: 115, nadia: 30, rate: 26.1, avgConvos: 3.8, teamsPct: 33, calPct: 23 },
  { bu: 'Alliances', pop: 106, nadia: 51, rate: 48.1, avgConvos: 2.8, teamsPct: 69, calPct: 41 },
  { bu: 'Corp Comm', pop: 90, nadia: 29, rate: 32.2, avgConvos: 3.0, teamsPct: 38, calPct: 24 },
  { bu: 'Legal', pop: 77, nadia: 61, rate: 79.2, avgConvos: 4.8, teamsPct: 66, calPct: 38 },
  { bu: 'Delta Material Services', pop: 71, nadia: 13, rate: 18.3, avgConvos: 5.0, teamsPct: 38, calPct: 23 },
  { bu: 'Global Health and Wellbeing', pop: 69, nadia: 37, rate: 53.6, avgConvos: 6.7, teamsPct: 46, calPct: 30 },
  { bu: 'Corporate Real Estate', pop: 68, nadia: 49, rate: 72.1, avgConvos: 3.0, teamsPct: 61, calPct: 45 },
  { bu: 'Brand Experience', pop: 53, nadia: 22, rate: 41.5, avgConvos: 3.9, teamsPct: 32, calPct: 18 },
  { bu: 'Customer Experience Design', pop: 51, nadia: 22, rate: 43.1, avgConvos: 3.0, teamsPct: 45, calPct: 36 },
  { bu: 'DLV Rev Mgmt & Strat Initiatives', pop: 43, nadia: 18, rate: 41.9, avgConvos: 3.4, teamsPct: 39, calPct: 17 },
  { bu: 'Strategy', pop: 41, nadia: 15, rate: 36.6, avgConvos: 5.6, teamsPct: 53, calPct: 27 },
  { bu: 'Global Consumer Insight', pop: 39, nadia: 20, rate: 51.3, avgConvos: 2.2, teamsPct: 30, calPct: 20 },
  { bu: 'DLV Sales', pop: 34, nadia: 18, rate: 52.9, avgConvos: 7.4, teamsPct: 50, calPct: 28 },
  { bu: 'DLV Product Development', pop: 33, nadia: 23, rate: 69.7, avgConvos: 4.2, teamsPct: 26, calPct: 9 },
  { bu: 'DLV Marketing', pop: 31, nadia: 12, rate: 38.7, avgConvos: 3.6, teamsPct: 42, calPct: 8 },
  { bu: 'Fuel Management', pop: 29, nadia: 6, rate: 20.7, avgConvos: 9.2, teamsPct: 50, calPct: 17 },
  { bu: 'Officer & Admin', pop: 28, nadia: 7, rate: 25.0, avgConvos: 1.6, teamsPct: 29, calPct: 14 },
  { bu: 'Global Sustainability', pop: 26, nadia: 12, rate: 46.2, avgConvos: 3.8, teamsPct: 58, calPct: 17 },
  { bu: 'Government Affairs', pop: 25, nadia: 16, rate: 64.0, avgConvos: 3.8, teamsPct: 69, calPct: 38 },
  { bu: 'Delta Connection', pop: 24, nadia: 6, rate: 25.0, avgConvos: 9.8, teamsPct: 17, calPct: 17 },
  { bu: 'DLV Finance and Accounting', pop: 23, nadia: 4, rate: 17.4, avgConvos: 3.2, teamsPct: 50, calPct: 50 },
  { bu: 'Diversity, Equity & Inclusion', pop: 17, nadia: 15, rate: 88.2, avgConvos: 4.7, teamsPct: 47, calPct: 40 },
  { bu: 'DLV HR', pop: 15, nadia: 13, rate: 86.7, avgConvos: 11.2, teamsPct: 46, calPct: 23 },
  { bu: 'PER', pop: 6, nadia: 4, rate: 66.7, avgConvos: 11.0, teamsPct: 50, calPct: 25 },
  { bu: 'DLV Corporate General', pop: 5, nadia: 3, rate: 60.0, avgConvos: 2.3, teamsPct: 33, calPct: 0 },
  { bu: 'Innovation & Ops Technology', pop: 4, nadia: 3, rate: 75.0, avgConvos: 1.3, teamsPct: 0, calPct: 0 },
  { bu: 'ITS', pop: 2, nadia: 1, rate: 50.0, avgConvos: 1.0, teamsPct: 100, calPct: 0 },
];

export const gradeData = [
  { grade: '7', pop: 2296, nadia: 872, rate: 38.0, avgConvos: 6.2, teamsPct: 42, calPct: 22 },
  { grade: '6', pop: 2189, nadia: 752, rate: 34.4, avgConvos: 7.3, teamsPct: 36, calPct: 21 },
  { grade: '9', pop: 1994, nadia: 688, rate: 34.5, avgConvos: 4.9, teamsPct: 39, calPct: 24 },
  { grade: '10', pop: 1942, nadia: 1037, rate: 53.4, avgConvos: 10.5, teamsPct: 46, calPct: 30 },
  { grade: '7S', pop: 1324, nadia: 802, rate: 60.6, avgConvos: 11.5, teamsPct: 36, calPct: 22 },
  { grade: '8', pop: 1237, nadia: 644, rate: 52.1, avgConvos: 8.7, teamsPct: 44, calPct: 27 },
  { grade: '5', pop: 834, nadia: 271, rate: 32.5, avgConvos: 7.5, teamsPct: 42, calPct: 20 },
  { grade: '11', pop: 804, nadia: 438, rate: 54.5, avgConvos: 8.4, teamsPct: 46, calPct: 28 },
  { grade: 'Unknown', pop: 585, nadia: 26, rate: 4.4, avgConvos: 4.0, teamsPct: 27, calPct: 12 },
  { grade: '12', pop: 330, nadia: 176, rate: 53.3, avgConvos: 5.4, teamsPct: 48, calPct: 28 },
  { grade: '4', pop: 232, nadia: 85, rate: 36.6, avgConvos: 4.1, teamsPct: 34, calPct: 18 },
  { grade: '1', pop: 200, nadia: 4, rate: 2.0, avgConvos: 1.5, teamsPct: 0, calPct: 0 },
  { grade: '13', pop: 169, nadia: 83, rate: 49.1, avgConvos: 5.9, teamsPct: 43, calPct: 30 },
  { grade: '9S', pop: 167, nadia: 79, rate: 47.3, avgConvos: 8.2, teamsPct: 28, calPct: 24 },
  { grade: '2', pop: 165, nadia: 11, rate: 6.7, avgConvos: 2.6, teamsPct: 55, calPct: 18 },
  { grade: '14', pop: 57, nadia: 24, rate: 42.1, avgConvos: 3.2, teamsPct: 50, calPct: 33 },
  { grade: '3', pop: 36, nadia: 18, rate: 50.0, avgConvos: 3.3, teamsPct: 28, calPct: 22 },
  { grade: '15', pop: 30, nadia: 7, rate: 23.3, avgConvos: 1.6, teamsPct: 14, calPct: 14 },
  { grade: '16', pop: 8, nadia: 2, rate: 25.0, avgConvos: 1.0, teamsPct: 50, calPct: 50 },
  { grade: '17', pop: 1, nadia: 0, rate: 0.0, avgConvos: 0, teamsPct: 0, calPct: 0 },
  { grade: '18', pop: 1, nadia: 0, rate: 0.0, avgConvos: 0, teamsPct: 0, calPct: 0 },
];

export const careerLevelData = [
  { level: 'Specialist', pop: 2016, nadia: 771, rate: 38.2, avgConvos: 5.8 },
  { level: 'Advanced Specialist', pop: 1977, nadia: 678, rate: 34.3, avgConvos: 4.9 },
  { level: 'Unknown', pop: 1774, nadia: 377, rate: 21.3, avgConvos: 7.5 },
  { level: 'Frontline Leader', pop: 1501, nadia: 917, rate: 61.1, avgConvos: 11.5 },
  { level: 'Sr. Manager', pop: 1457, nadia: 852, rate: 58.5, avgConvos: 11.8 },
  { level: 'Sr. Analyst', pop: 1246, nadia: 410, rate: 32.9, avgConvos: 6.9 },
  { level: 'General Manager', pop: 740, nadia: 404, rate: 54.6, avgConvos: 8.9 },
  { level: 'Manager', pop: 695, nadia: 381, rate: 54.8, avgConvos: 9.9 },
  { level: 'Lead/Advanced Specialist', pop: 478, nadia: 229, rate: 47.9, avgConvos: 7.1 },
  { level: 'Lead Manager', pop: 472, nadia: 177, rate: 37.5, avgConvos: 3.9 },
  { level: 'Sr. Coordinator', pop: 395, nadia: 132, rate: 33.4, avgConvos: 5.7 },
  { level: 'Analyst', pop: 363, nadia: 113, rate: 31.1, avgConvos: 6.1 },
  { level: 'Director', pop: 325, nadia: 173, rate: 53.2, avgConvos: 5.4 },
  { level: 'Coordinator', pop: 302, nadia: 95, rate: 31.5, avgConvos: 6.0 },
  { level: 'FLL (TechOps)', pop: 173, nadia: 79, rate: 45.7, avgConvos: 8.2 },
  { level: 'Support Specialist', pop: 171, nadia: 55, rate: 32.2, avgConvos: 4.1 },
  { level: 'Managing Director', pop: 168, nadia: 83, rate: 49.4, avgConvos: 5.9 },
  { level: 'Lead Principal', pop: 62, nadia: 33, rate: 53.2, avgConvos: 2.9 },
  { level: 'VP', pop: 57, nadia: 24, rate: 42.1, avgConvos: 3.2 },
  { level: 'Chief Pilot', pop: 52, nadia: 6, rate: 11.5, avgConvos: 1.7 },
  { level: 'Line Pilot', pop: 46, nadia: 1, rate: 2.2, avgConvos: 2.0 },
  { level: 'Supervisor', pop: 38, nadia: 15, rate: 39.5, avgConvos: 7.0 },
  { level: 'Sr. VP', pop: 30, nadia: 7, rate: 23.3, avgConvos: 1.6 },
  { level: 'Executive VP', pop: 8, nadia: 2, rate: 25.0, avgConvos: 1.0 },
  { level: 'Aircraft Maint. Tech Lead', pop: 8, nadia: 0, rate: 0.0, avgConvos: 0 },
  { level: 'Chief Standards Captain', pop: 7, nadia: 1, rate: 14.3, avgConvos: 1.0 },
  { level: 'Support', pop: 7, nadia: 2, rate: 28.6, avgConvos: 5.5 },
  { level: 'Chief Training Captain', pop: 6, nadia: 1, rate: 16.7, avgConvos: 3.0 },
  { level: 'Flight Attendant', pop: 4, nadia: 1, rate: 25.0, avgConvos: 3.0 },
  { level: 'Special Assignment Supervisor', pop: 4, nadia: 0, rate: 0.0, avgConvos: 0 },
  { level: 'Instructor', pop: 3, nadia: 0, rate: 0.0, avgConvos: 0 },
  { level: 'FO Tech Pilot', pop: 10, nadia: 0, rate: 0.0, avgConvos: 0 },
  { level: 'Line Check Pilot', pop: 2, nadia: 0, rate: 0.0, avgConvos: 0 },
];

export const fllData = {
  fllInNadia: 1373, fllAvgConvos: 10.2, fllTeams: 37,
  connectUsers: 112, connectAvgConvos: 28.0,
  noConnectUsers: 5907, noConnectAvgConvos: 7.7,
  totalConnectAllUsers: 121,
  fllByBu: [
    { bu: 'Airport Customer Service', total: 950, nadia: 566, rate: 59.6, teamsPct: 30, calPct: 19, avgConvos: 11.1, connectUsers: 33 },
    { bu: 'Inflight Services', total: 336, nadia: 209, rate: 62.2, teamsPct: 46, calPct: 24, avgConvos: 9.7, connectUsers: 2 },
    { bu: 'TechOps', total: 180, nadia: 80, rate: 44.4, teamsPct: 26, calPct: 19, avgConvos: 7.7, connectUsers: 9 },
    { bu: 'Reservations & Cust. Care', total: 119, nadia: 96, rate: 80.7, teamsPct: 58, calPct: 40, avgConvos: 19.8, connectUsers: 28 },
    { bu: 'Cargo', total: 57, nadia: 28, rate: 49.1, teamsPct: 32, calPct: 36, avgConvos: 9.9, connectUsers: 0 },
  ],
};

// ─── SKILLS LANDSCAPE (all users, top skills) ───
export const skillsLandscape = [
  { skill: 'Communication', exhibited: 4033, exhibitedPct: 63.3, opportunity: 1760, opportunityPct: 27.6 },
  { skill: 'Strategic Thinking', exhibited: 1660, exhibitedPct: 26.0, opportunity: 546, opportunityPct: 8.6 },
  { skill: 'Accountability', exhibited: 1197, exhibitedPct: 18.8, opportunity: 652, opportunityPct: 10.2 },
  { skill: 'Managing Performance', exhibited: 790, exhibitedPct: 12.4, opportunity: 450, opportunityPct: 7.1 },
  { skill: 'Decision Making', exhibited: 761, exhibitedPct: 11.9, opportunity: 153, opportunityPct: 2.4 },
  { skill: 'Analytical Skills', exhibited: 697, exhibitedPct: 10.9, opportunity: 158, opportunityPct: 2.5 },
  { skill: 'Digital Fluency', exhibited: 650, exhibitedPct: 10.2, opportunity: 519, opportunityPct: 8.1 },
  { skill: 'Organizational Skills', exhibited: 568, exhibitedPct: 8.9, opportunity: 283, opportunityPct: 4.4 },
  { skill: 'Developing Others', exhibited: 531, exhibitedPct: 8.3, opportunity: 402, opportunityPct: 6.3 },
  { skill: 'Emotional Intelligence', exhibited: 486, exhibitedPct: 7.6, opportunity: 372, opportunityPct: 5.8 },
  { skill: 'Detail Oriented', exhibited: 435, exhibitedPct: 6.8, opportunity: 150, opportunityPct: 2.4 },
  { skill: 'Teamwork', exhibited: 349, exhibitedPct: 5.5, opportunity: 176, opportunityPct: 2.8 },
  { skill: 'Servant Leadership', exhibited: 209, exhibitedPct: 3.3, opportunity: 135, opportunityPct: 2.1 },
  { skill: 'Influencing Skills', exhibited: 168, exhibitedPct: 2.6, opportunity: 553, opportunityPct: 8.7 },
  { skill: 'Adaptability', exhibited: 157, exhibitedPct: 2.5, opportunity: 124, opportunityPct: 1.9 },
];

// Skills filters - imported from generated data
export { skillsFilterBu, skillsFilterCareer, skillsFilterGrade } from './_filters';

// Skills needed for goal achievement cross-referenced with exhibited/opportunity
export const goalSkillsAnalysis = [
  { skill: 'Strategic Thinking', neededForGoals: 811, exhibited: 1660, opportunity: 546 },
  { skill: 'Communication', neededForGoals: 546, exhibited: 4033, opportunity: 1760 },
  { skill: 'Managing Performance', neededForGoals: 518, exhibited: 790, opportunity: 450 },
  { skill: 'Accountability', neededForGoals: 372, exhibited: 1197, opportunity: 652 },
  { skill: 'Digital Fluency', neededForGoals: 347, exhibited: 650, opportunity: 519 },
  { skill: 'Influencing Skills', neededForGoals: 285, exhibited: 168, opportunity: 553 },
  { skill: 'Developing Others', neededForGoals: 277, exhibited: 531, opportunity: 402 },
  { skill: 'Decision Making', neededForGoals: 223, exhibited: 761, opportunity: 153 },
  { skill: 'Emotional Intelligence', neededForGoals: 79, exhibited: 486, opportunity: 372 },
  { skill: 'Servant Leadership', neededForGoals: 26, exhibited: 209, opportunity: 135 },
];

// Goal engagement by BU
export const goalEngagementBu = [
  { bu: 'Airport Customer Service', users: 927, withGoals: 228, goalPct: 24.6, avgSessions: 1.4 },
  { bu: 'Information Technology', users: 672, withGoals: 121, goalPct: 18.0, avgSessions: 1.4 },
  { bu: 'TechOps', users: 644, withGoals: 185, goalPct: 28.7, avgSessions: 1.4 },
  { bu: 'Global Sales', users: 470, withGoals: 135, goalPct: 28.7, avgSessions: 1.6 },
  { bu: 'HR & Labor', users: 431, withGoals: 185, goalPct: 42.9, avgSessions: 1.4 },
  { bu: 'Inflight Services', users: 406, withGoals: 169, goalPct: 41.6, avgSessions: 1.4 },
  { bu: 'Reservations & Cust. Care', users: 242, withGoals: 101, goalPct: 41.7, avgSessions: 1.4 },
  { bu: 'Revenue Management', users: 204, withGoals: 91, goalPct: 44.6, avgSessions: 1.3 },
  { bu: 'GTH Information Technology', users: 204, withGoals: 20, goalPct: 9.8, avgSessions: 1.3 },
  { bu: 'Finance', users: 161, withGoals: 65, goalPct: 40.4, avgSessions: 1.5 },
  { bu: 'On-Board Services', users: 109, withGoals: 24, goalPct: 22.0, avgSessions: 1.5 },
  { bu: 'Enterprise Digital Strategy', users: 81, withGoals: 17, goalPct: 21.0, avgSessions: 1.5 },
  { bu: 'Flight Ops', users: 75, withGoals: 16, goalPct: 21.3, avgSessions: 1.4 },
  { bu: 'Cargo', users: 74, withGoals: 20, goalPct: 27.0, avgSessions: 1.4 },
];

// Goal engagement by grade
export const goalEngagementGrade = [
  { grade: '10', users: 998, withGoals: 317, goalPct: 31.8, avgSessions: 1.5 },
  { grade: '7', users: 809, withGoals: 298, goalPct: 36.8, avgSessions: 1.4 },
  { grade: '7S', users: 771, withGoals: 184, goalPct: 23.9, avgSessions: 1.3 },
  { grade: '6', users: 692, withGoals: 247, goalPct: 35.7, avgSessions: 1.5 },
  { grade: '9', users: 635, withGoals: 204, goalPct: 32.1, avgSessions: 1.4 },
  { grade: '8', users: 601, withGoals: 221, goalPct: 36.8, avgSessions: 1.5 },
  { grade: '11', users: 426, withGoals: 125, goalPct: 29.3, avgSessions: 1.5 },
  { grade: '5', users: 256, withGoals: 85, goalPct: 33.2, avgSessions: 1.4 },
  { grade: '12', users: 169, withGoals: 44, goalPct: 26.0, avgSessions: 1.5 },
  { grade: '13', users: 80, withGoals: 15, goalPct: 18.8, avgSessions: 1.5 },
  { grade: '9S', users: 77, withGoals: 16, goalPct: 20.8, avgSessions: 1.7 },
  { grade: '4', users: 72, withGoals: 27, goalPct: 37.5, avgSessions: 1.4 },
  { grade: '14', users: 24, withGoals: 2, goalPct: 8.3, avgSessions: 1.0 },
];

// Goal barriers by grade band
export const barriersByGradeBand = [
  { band: 'Entry (4-5)', barriers: [{ name: 'Knowledge/Skill', count: 9 }, { name: 'Collaboration', count: 6 }, { name: 'Org Structure', count: 6 }, { name: 'Resource/Capacity', count: 3 }] },
  { band: 'Mid (6-7)', barriers: [{ name: 'Resource/Capacity', count: 59 }, { name: 'Org Structure', count: 45 }, { name: 'Knowledge/Skill', count: 36 }, { name: 'Collaboration', count: 28 }] },
  { band: 'Senior (8-10)', barriers: [{ name: 'Org Structure', count: 66 }, { name: 'Resource/Capacity', count: 58 }, { name: 'Knowledge/Skill', count: 43 }, { name: 'Collaboration', count: 39 }] },
  { band: 'Leadership (11-13)', barriers: [{ name: 'Org Structure', count: 20 }, { name: 'Collaboration', count: 14 }, { name: 'Knowledge/Skill', count: 10 }, { name: 'Resource/Capacity', count: 9 }] },
];

// Skills needed for goals by grade band
export const skillsForGoalsByBand = [
  { band: 'Entry (4-5)', skills: [{ name: 'Communication', count: 44 }, { name: 'Strategic Thinking', count: 33 }, { name: 'Accountability', count: 23 }, { name: 'Managing Performance', count: 19 }, { name: 'Developing Others', count: 19 }] },
  { band: 'Mid (6-7)', skills: [{ name: 'Strategic Thinking', count: 238 }, { name: 'Managing Performance', count: 203 }, { name: 'Communication', count: 193 }, { name: 'Accountability', count: 154 }, { name: 'Digital Fluency', count: 120 }] },
  { band: 'Senior (8-10)', skills: [{ name: 'Strategic Thinking', count: 298 }, { name: 'Managing Performance', count: 171 }, { name: 'Communication', count: 153 }, { name: 'Digital Fluency', count: 109 }, { name: 'Accountability', count: 107 }] },
  { band: 'Leadership (11-13)', skills: [{ name: 'Strategic Thinking', count: 101 }, { name: 'Managing Performance', count: 50 }, { name: 'Influencing Skills', count: 26 }, { name: 'Communication', count: 25 }, { name: 'Digital Fluency', count: 18 }] },
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

// Monthly timeline — from Metabase query (actual data)
export const monthlyTimeline = [
  { month: 'Dec 24', newUsers: 258, returnUsers: 9, newRegistered: 281 },
  { month: 'Jan 25', newUsers: 12, returnUsers: 91, newRegistered: 35 },
  { month: 'Feb 25', newUsers: 294, returnUsers: 120, newRegistered: 421 },
  { month: 'Mar 25', newUsers: 38, returnUsers: 164, newRegistered: 38 },
  { month: 'Apr 25', newUsers: 14, returnUsers: 112, newRegistered: 18 },
  { month: 'May 25', newUsers: 103, returnUsers: 123, newRegistered: 317 },
  { month: 'Jun 25', newUsers: 727, returnUsers: 235, newRegistered: 1377 },
  { month: 'Jul 25', newUsers: 1460, returnUsers: 630, newRegistered: 2176 },
  { month: 'Aug 25', newUsers: 187, returnUsers: 655, newRegistered: 274 },
  { month: 'Sep 25', newUsers: 282, returnUsers: 597, newRegistered: 466 },
  { month: 'Oct 25', newUsers: 146, returnUsers: 595, newRegistered: 137 },
  { month: 'Nov 25', newUsers: 272, returnUsers: 729, newRegistered: 242 },
  { month: 'Dec 25', newUsers: 1378, returnUsers: 1764, newRegistered: 1271 },
  { month: 'Jan 26', newUsers: 390, returnUsers: 1473, newRegistered: 456 },
  { month: 'Feb 26', newUsers: 816, returnUsers: 2327, newRegistered: 630 },
  { month: 'Mar 26', newUsers: 50, returnUsers: 778, newRegistered: 45 },
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
