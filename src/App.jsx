import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, ComposedChart, Line, ScatterChart, Scatter, ZAxis,
  LabelList
} from 'recharts';
import {
  kpis, integrationEffect, integrationImpact, buData,
  gradeData, careerLevelData, fllData,
  skillsLandscape, skillsFilterBu, skillsFilterGrade,
  goalSkillsAnalysis, goalEngagementBu, goalEngagementGrade,
  barriersByGradeBand, skillsForGoalsByBand,
  goalQuality, goalBarriersByBu, monthlyTimeline,
  activationFormula, stationData
} from './data';
import './App.css';

// Valence brand colors
const BLUE = '#003FDC';
const PINK = '#FF2891';
const BRIGHT_BLUE = '#0084F0';
const PURPLE = '#9A31AF';
const DARK_BLUE = '#0009B4';

// Custom label for bar charts
const renderBarLabel = (props) => {
  const { x, y, width, value } = props;
  if (!value && value !== 0) return null;
  return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10} fontWeight={400}>{value}</text>;
};
const renderBarLabelTop = (props) => {
  const { x, y, width, value } = props;
  if (!value && value !== 0) return null;
  return <text x={x + width / 2} y={y - 6} fill="#393939" fontSize={10} fontWeight={400} textAnchor="middle">{value}</text>;
};
const renderPctLabel = (props) => {
  const { x, y, width, value } = props;
  if (!value && value !== 0) return null;
  return <text x={x + width / 2} y={y - 6} fill="#393939" fontSize={10} fontWeight={400} textAnchor="middle">{value}%</text>;
};

// ─── PAGE 1: Executive Summary ──────────────────────────

function Page1() {
  return (<>
    <div className="card">
      <h1>Nadia at Delta: AI coaching adoption overview</h1>
      <h2>Executive Summary — March 2026</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">14,602</div><div className="kpi-label">Total Merit Population</div></div>
        <div className="kpi"><div className="kpi-value">6,373</div><div className="kpi-label">Nadia Users</div><div className="kpi-sub">43.6% adoption</div></div>
        <div className="kpi"><div className="kpi-value">50,218</div><div className="kpi-label">Total Conversations</div></div>
        <div className="kpi"><div className="kpi-value">7.9</div><div className="kpi-label">Avg Conversations per User</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #0084F0, #003FDC)'}}><div className="kpi-value">2.3x</div><div className="kpi-label">Integration Engagement Multiplier</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #9A31AF, #0009B4)'}}><div className="kpi-value">83%</div><div className="kpi-label">Highest BU Adoption (HR & Labor)</div></div>
      </div>
      <div className="narrative">
        As of March 2026, Nadia has reached 43.6% of Delta's merit population, with over 50,000 coaching conversations logged since launch. Adoption is being driven by integration into formal talent processes — year-end reviews and goal-setting drove a 5x surge in activity. The opportunity now is to deepen engagement, expand to under-penetrated BUs, and unlock the frontline leader Connect use case.
      </div>
    </div>
  </>);
}

// ─── PAGE 2: Growth Timeline ────────────────────────────

function Page2() {
  return (<>
    <div className="card">
      <h1>Adoption has been driven by talent process integration</h1>
      <h2>Growth Timeline — Registered Users Still Active Each Month</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={monthlyTimeline}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis yAxisId="left" label={{ value: 'Active Users', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#393939' } }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Users Last Seen This Month', angle: 90, position: 'insideRight', style: { fontSize: 11, fill: '#393939' } }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="right" dataKey="lastSeenThisMonth" fill={PINK} name="Users Last Seen This Month" radius={[4,4,0,0]} opacity={0.8} />
            <Line yAxisId="left" type="monotone" dataKey="activeUsers" stroke={BLUE} strokeWidth={2.5} dot={{ r: 4 }} name="Total Registered Users Still Active" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Nadia's growth follows Delta's talent calendar. The largest activation events were the year-end performance review cycle (December 2025 — 1,210 users active) and the annual goal-setting process (February 2026 — 3,082 users). Embedding Nadia into formal talent processes is the most effective adoption driver.
      </div>
      <div className="callout">
        <strong>Key milestone:</strong> 78% of all Nadia users were last active in the Dec 2025 - Feb 2026 window, coinciding with year-end reviews and goal-setting.
      </div>
    </div>
  </>);
}

// ─── PAGE 3: Integration Effect ─────────────────────────

function Page3() {
  return (<>
    <div className="card">
      <h1>Connecting Teams + Calendar = 2.3x more engagement</h1>
      <h2>The Integration Effect</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={integrationEffect} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Avg Conversations', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="label" width={160} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={BLUE} radius={[0,4,4,0]}>
              <LabelList dataKey="avgConvos" content={renderBarLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Users who connect both Teams and Calendar average 12.2 conversations — 2.3x more than users with neither integration (5.3). This is the single highest-leverage intervention for driving engagement depth.
      </div>
    </div>
    <div className="card">
      <h2>Engagement Multipliers — What Drives Deeper Use</h2>
      <table className="data-table">
        <thead><tr><th>Factor</th><th>Avg Convos (With)</th><th>N</th><th>Avg Convos (Without)</th><th>N</th><th>Multiplier</th></tr></thead>
        <tbody>
          {integrationImpact.map((r, i) => (
            <tr key={i} className={parseFloat(r.multiplier) >= 1.8 ? 'highlight' : ''}>
              <td>{r.factor}</td><td>{r.with}</td><td>{r.withN.toLocaleString()}</td>
              <td>{r.without}</td><td>{r.withoutN.toLocaleString()}</td><td><strong>{r.multiplier}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout callout-green">
        <strong>Insight:</strong> Connect sessions (3.7x), Teams integration (1.9x), and Calendar integration (1.9x) are the strongest engagement multipliers. Goal completion also drives a 1.8x lift.
      </div>
    </div>
  </>);
}

// ─── PAGE 4: BU & Grade Adoption ────────────────────────

function Page4() {
  return (<>
    <div className="card">
      <h1>Adoption varies widely by business unit</h1>
      <h2>Business Unit Adoption — Sorted by Population</h2>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>Population</th><th>Nadia Users</th><th>Adoption %</th><th>Avg Convos</th><th>Teams %</th><th>Calendar %</th></tr></thead>
        <tbody>
          {buData.map((r, i) => (
            <tr key={i} className={r.rate >= 60 ? 'highlight' : r.rate < 25 ? 'danger' : ''}>
              <td>{r.bu}</td><td>{r.pop.toLocaleString()}</td><td>{r.nadia.toLocaleString()}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td><td>{r.teamsPct}%</td><td>{r.calPct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="card">
      <h2>Grade Level Adoption — Sorted by Population</h2>
      <table className="data-table">
        <thead><tr><th>Grade</th><th>Population</th><th>Nadia Users</th><th>Adoption %</th><th>Avg Convos</th><th>Teams %</th><th>Calendar %</th></tr></thead>
        <tbody>
          {gradeData.map((r, i) => (
            <tr key={i} className={r.rate >= 55 ? 'highlight' : r.rate < 30 ? 'danger' : ''}>
              <td>{r.grade}</td><td>{r.pop.toLocaleString()}</td><td>{r.nadia.toLocaleString()}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td><td>{r.teamsPct}%</td><td>{r.calPct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <strong>Pattern:</strong> Grade 7S (frontline leaders) at 60.6% adoption is the highest by grade — confirming FLLs are a natural Nadia audience. Grades 9 and below show room for growth.
      </div>
    </div>
  </>);
}

// ─── PAGE 5: BU Quality Matrix ──────────────────────────

function Page5() {
  const bubbleData = buData.filter(b => b.pop >= 150).map(b => ({
    name: b.bu.length > 20 ? b.bu.substring(0, 18) + '...' : b.bu,
    x: b.rate,
    y: b.avgConvos,
    z: b.nadia,
    fullName: b.bu,
  }));
  return (<>
    <div className="card">
      <h1>Which BUs have both high reach and deep engagement?</h1>
      <h2>BU Adoption Quality Matrix</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="Adoption %" unit="%" label={{ value: 'Adoption Rate (%)', position: 'insideBottom', offset: -10, style: { fontSize: 12 } }} />
            <YAxis type="number" dataKey="y" name="Avg Convos" label={{ value: 'Avg Conversations', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
            <ZAxis type="number" dataKey="z" range={[80, 600]} name="Users" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
              if (!payload || !payload.length) return null;
              const d = payload[0].payload;
              return (<div style={{ background: 'white', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 12 }}>
                <strong>{d.fullName}</strong><br/>Adoption: {d.x}% | Avg Convos: {d.y}<br/>Users: {d.z.toLocaleString()}
              </div>);
            }} />
            <Scatter data={bubbleData} fill={BLUE} fillOpacity={0.7}>
              <LabelList dataKey="name" position="top" style={{ fontSize: 9, fill: '#393939' }} />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-green">
        <strong>Stars:</strong> HR & Labor (83% adoption, 11.2 avg convos), Reservations & Cust. Care (67%, 20.1), and DLV Operations (15%, but 25.8 avg convos — small but deeply engaged).
      </div>
      <div className="callout callout-red">
        <strong>Opportunity:</strong> TechOps (2,331 employees, 31% adoption, 5.5 avg convos) and IT (2,099 employees, 34%, 4.5 avg convos) are the two largest BUs with below-average adoption and engagement depth.
      </div>
    </div>
  </>);
}

// ─── PAGE 6: Grade Level Chart ──────────────────────────

function Page6() {
  const gradeChart = gradeData.map(g => ({ ...g, name: `Grade ${g.grade}` }));
  return (<>
    <div className="card">
      <h1>Adoption rate increases with seniority</h1>
      <h2>Adoption Rate by Grade Level</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={gradeChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" height={60} />
            <YAxis label={{ value: 'Adoption %', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="rate" fill={BLUE} name="Adoption Rate %" radius={[4,4,0,0]}>
              <LabelList dataKey="rate" content={renderPctLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Grade 7S (frontline leaders) leads adoption at 60.6%, followed by Grade 11 (54.5%) and Grade 10 (53.4%). Entry-level grades (4-5) and very senior grades (14+) show the lowest adoption — likely different intervention strategies are needed for each end.
      </div>
    </div>
  </>);
}

// ─── PAGE 7: Career Level Deep Dive ─────────────────────

function Page7() {
  const sorted = [...careerLevelData].sort((a, b) => b.rate - a.rate);
  return (<>
    <div className="card">
      <h1>Frontline leaders and senior managers lead adoption</h1>
      <h2>Career Level Adoption & Engagement</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={480}>
          <BarChart data={sorted} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Adoption Rate %', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="level" width={130} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="rate" fill={BLUE} name="Adoption Rate %" radius={[0,4,4,0]}>
              <LabelList dataKey="rate" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10} fontWeight={400}>{value}%</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-container">
        <h3 style={{ marginBottom: 8 }}>Average Conversations by Career Level</h3>
        <ResponsiveContainer width="100%" height={480}>
          <BarChart data={sorted} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Avg Conversations', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="level" width={130} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={PINK} name="Avg Conversations" radius={[0,4,4,0]}>
              <LabelList dataKey="avgConvos" content={renderBarLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Frontline Leaders (61.1% adoption, 11.5 avg convos) and Sr. Managers (58.5%, 11.8) are the most engaged career levels — both in reach and depth. Individual contributors (Specialists, Analysts) show lower adoption but still meaningful engagement when they do adopt.
      </div>
    </div>
  </>);
}

// ─── PAGE 8: Station / Location ─────────────────────────

function Page8() {
  return (<>
    <div className="card">
      <h1>Atlanta dominates, but hubs show strong adoption</h1>
      <h2>Station / Location Overview</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stationData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Adoption Rate %', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="station" width={140} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="rate" fill={BLUE} radius={[0,4,4,0]}>
              <LabelList dataKey="rate" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10}>{value}%</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout">
        <strong>Notable:</strong> ATL Reservations Center leads at 78.7% adoption with 18.1 avg conversations. Non-ATL hubs like MSP (58.5%), BOS (55.6%), and SLC (53.4%) show strong organic spread. Bangalore (GTH IT) at 28.1% represents a focused growth opportunity.
      </div>
    </div>
  </>);
}

// ─── PAGE 9: Frontline Leaders ──────────────────────────

function Page9() {
  return (<>
    <div className="card">
      <h1>Frontline leaders: Nadia's natural power users</h1>
      <h2>Frontline Leader Spotlight</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">1,373</div><div className="kpi-label">FLLs on Nadia</div></div>
        <div className="kpi"><div className="kpi-value">10.2</div><div className="kpi-label">Avg Conversations</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #9A31AF, #0009B4)'}}><div className="kpi-value">3.7x</div><div className="kpi-label">Connect Session Multiplier</div></div>
      </div>
      <div className="narrative">
        Frontline leaders (FLLs) average 10.2 conversations — 29% above the org-wide mean. The 61 FLLs who have used Delta Connect average 31.1 conversations, a 3.7x multiplier vs. non-Connect FLLs (9.3). Connect is the highest-impact product feature for this audience.
      </div>
    </div>
    <div className="card">
      <h2>Frontline Leaders by Business Unit</h2>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>Total FLLs</th><th>On Nadia</th><th>Adoption %</th><th>Teams %</th><th>Calendar %</th><th>Avg Convos</th></tr></thead>
        <tbody>
          {fllData.fllByBu.map((r, i) => (
            <tr key={i}>
              <td>{r.bu}</td><td>{r.total}</td><td>{r.nadia}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.teamsPct}%</td><td>{r.calPct}%</td><td>{r.avgConvos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout callout-green">
        <strong>Standout:</strong> Reservations & Cust. Care FLLs have 80.7% adoption and 19.8 avg conversations — the most engaged frontline leader cohort. Airport Customer Service has the most FLLs (950 total) with room to grow integration rates.
      </div>
    </div>
  </>);
}

// ─── PAGE 10: Skills Landscape (Filterable) ─────────────

function Page10() {
  const [filter, setFilter] = useState('all');
  const filterOptions = [
    { value: 'all', label: 'All Users' },
    ...Object.keys(skillsFilterBu).map(bu => ({ value: `bu:${bu}`, label: bu })),
    ...Object.keys(skillsFilterGrade).map(g => ({ value: `grade:${g}`, label: g })),
  ];

  let displayData;
  if (filter === 'all') {
    displayData = skillsLandscape.slice(0, 12);
  } else if (filter.startsWith('bu:')) {
    const bu = filter.replace('bu:', '');
    const d = skillsFilterBu[bu];
    const allSkills = new Set([...d.exhibited.map(s => s.skill), ...d.opportunity.map(s => s.skill)]);
    displayData = Array.from(allSkills).map(skill => {
      const ex = d.exhibited.find(s => s.skill === skill);
      const op = d.opportunity.find(s => s.skill === skill);
      return { skill, exhibited: ex ? ex.count : 0, opportunity: op ? op.count : 0 };
    }).sort((a, b) => b.exhibited - a.exhibited).slice(0, 10);
  } else if (filter.startsWith('grade:')) {
    const grade = filter.replace('grade:', '');
    const d = skillsFilterGrade[grade];
    const allSkills = new Set([...d.exhibited.map(s => s.skill), ...d.opportunity.map(s => s.skill)]);
    displayData = Array.from(allSkills).map(skill => {
      const ex = d.exhibited.find(s => s.skill === skill);
      const op = d.opportunity.find(s => s.skill === skill);
      return { skill, exhibited: ex ? ex.count : 0, opportunity: op ? op.count : 0 };
    }).sort((a, b) => b.exhibited - a.exhibited).slice(0, 10);
  }

  return (<>
    <div className="card">
      <h1>What skills are Delta employees demonstrating?</h1>
      <h2>Skills Landscape — Exhibited vs. Growth Opportunity</h2>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 500, marginRight: 8 }}>Filter by:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{
          padding: '6px 12px', borderRadius: 8, border: '1px solid #DFDFDF', fontSize: 13,
          fontFamily: 'var(--font-primary)', background: 'white', cursor: 'pointer', minWidth: 220,
        }}>
          {filterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={displayData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Number of Users', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="skill" width={140} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="exhibited" fill={BLUE} name="% Exhibited" radius={[0,4,4,0]} />
            <Bar dataKey="opportunity" fill={PINK} name="Growth Opportunity" radius={[0,4,4,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Communication is the most commonly exhibited skill (63% of users), but also the top growth area. The most striking gap is <strong>Influencing Skills</strong> — exhibited by only 2.6% of users but flagged as a growth opportunity for 8.7%, a 3.3x gap ratio. Digital Fluency (8.1% opportunity vs 10.2% exhibited) also shows significant development potential.
      </div>
    </div>
  </>);
}

// ─── PAGE 11: Skills for Goal Achievement ────────────────

function Page11() {
  return (<>
    <div className="card">
      <h1>Are employees building the skills they need for their goals?</h1>
      <h2>Skills Needed for Goal Achievement vs. Current Profile</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={goalSkillsAnalysis} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Number of Users', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="skill" width={140} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="neededForGoals" fill={PINK} name="Needed for Goals" radius={[0,4,4,0]} />
            <Bar dataKey="exhibited" fill={BLUE} name="Currently Exhibited" radius={[0,4,4,0]} />
            <Bar dataKey="opportunity" fill={BRIGHT_BLUE} name="Growth Opportunity" radius={[0,4,4,0]} opacity={0.7} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-red">
        <strong>Critical gap:</strong> Influencing Skills is needed for goals by 285 users but only exhibited by 168 — while 553 users have it flagged as a growth opportunity. This is the #1 skill gap where Nadia can help employees bridge from "needed" to "demonstrated."
      </div>
      <div className="callout callout-green">
        <strong>Bright spot:</strong> Strategic Thinking (needed by 811, exhibited by 1,660) and Decision Making (needed by 223, exhibited by 761) show employees already demonstrating these skills beyond what their goals require — evidence of organic skill-building.
      </div>
    </div>
  </>);
}

// ─── PAGE 12: Goal Engagement by BU & Grade ──────────────

function Page12() {
  const buChart = goalEngagementBu.slice(0, 12);
  const gradeChart = goalEngagementGrade.filter(g => g.grade !== 'Unknown' && g.users >= 20);
  return (<>
    <div className="card">
      <h1>Goal-setting engagement varies across the organization</h1>
      <h2>Goal-Setting Participation by Business Unit</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={buChart} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Goal-Setting %', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} domain={[0, 50]} />
            <YAxis type="category" dataKey="bu" width={170} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="goalPct" fill={BLUE} radius={[0,4,4,0]}>
              <LabelList dataKey="goalPct" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10}>{value}%</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Revenue Management (44.6%), HR & Labor (42.9%), and Reservations & Cust. Care (41.7%) lead goal-setting engagement among Nadia users. GTH IT (9.8%) and IT (18.0%) lag behind — the same BUs with low overall adoption.
      </div>
    </div>
    <div className="card">
      <h2>Goal-Setting Participation by Grade Level</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={360}>
          <BarChart data={gradeChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="grade" tick={{ fontSize: 11 }} label={{ value: 'Grade Level', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis label={{ value: 'Goal-Setting %', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip />
            <Bar dataKey="goalPct" fill={PINK} radius={[4,4,0,0]}>
              <LabelList dataKey="goalPct" content={renderPctLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout">
        <strong>Pattern:</strong> Mid-level grades (4, 7, 8, 6) show the highest goal-setting rates (35-38%). Frontline-heavy grade 7S is lower (23.9%) — potentially because FLLs are using Nadia more for team coaching than personal goal-setting. Senior grades (13-14) also show low goal engagement, suggesting different coaching use cases at that level.
      </div>
    </div>
  </>);
}

// ─── PAGE 13: Goal Barriers & Skills by Grade Band ──────

function Page13() {
  const BARRIER_COLORS = [BLUE, PINK, BRIGHT_BLUE, PURPLE];
  return (<>
    <div className="card">
      <h1>What's standing in the way of goal achievement?</h1>
      <h2>Top Goal Barriers by Grade Band</h2>
      {barriersByGradeBand.map((band, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <h3>{band.band}</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {band.barriers.map((b, j) => (
              <div key={j} style={{
                background: BARRIER_COLORS[j] + '15', border: `1px solid ${BARRIER_COLORS[j]}40`,
                borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 400,
              }}>
                <strong>{b.name}</strong> <span style={{ color: '#9A9A9A' }}>({b.count})</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="narrative">
        <strong>Entry-level (4-5):</strong> Knowledge/Skill gaps dominate — these employees need foundational capability building.<br/>
        <strong>Mid-level (6-7):</strong> Resource/Capacity is the top barrier — they know what to do but lack bandwidth or support.<br/>
        <strong>Senior (8-10):</strong> Org Structure emerges as #1 — cross-functional complexity and organizational silos impede progress.<br/>
        <strong>Leadership (11-13):</strong> Org Structure persists, with Collaboration rising — leaders face systemic, not skill, barriers.
      </div>
    </div>
    <div className="card">
      <h2>Top Skills Needed to Achieve Goals — by Grade Band</h2>
      <table className="data-table">
        <thead><tr><th>Grade Band</th><th>#1 Skill</th><th>#2 Skill</th><th>#3 Skill</th><th>#4 Skill</th><th>#5 Skill</th></tr></thead>
        <tbody>
          {skillsForGoalsByBand.map((band, i) => (
            <tr key={i}>
              <td><strong>{band.band}</strong></td>
              {band.skills.map((s, j) => (
                <td key={j}>{s.name} <span style={{ color: '#9A9A9A', fontSize: 11 }}>({s.count})</span></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <strong>Key shift:</strong> As employees progress from entry to leadership, their skill needs shift from Communication → Strategic Thinking → Influencing Skills. This mirrors the barrier progression from Knowledge gaps to Organizational/Structural challenges.
      </div>
    </div>
    <div className="card">
      <h2>Goal Quality Gaps</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={goalQuality} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} label={{ value: '% of Goals', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="gap" width={160} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="pct" fill={PINK} radius={[0,4,4,0]}>
              <LabelList dataKey="pct" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10}>{value}%</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-red">
        <strong>Opportunity:</strong> 90% of goals lack time specificity and 62% are not measurable. Nadia can prompt users for SMART goal refinement — this is a product opportunity.
      </div>
    </div>
  </>);
}

// ─── PAGE 14: Goal Barriers by BU ───────────────────────

function Page14() {
  return (<>
    <div className="card">
      <h1>Goal barriers reveal organizational pain points</h1>
      <h2>Top Goal Barriers by Business Unit</h2>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>#1 Barrier</th><th>#2 Barrier</th></tr></thead>
        <tbody>
          {goalBarriersByBu.map((r, i) => (
            <tr key={i}><td><strong>{r.bu}</strong></td><td>{r.b1}</td><td>{r.b2}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        Resource/Capacity is the most common barrier across operational BUs (Airport, TechOps, Inflight, Global Sales), while Information Technology cites Knowledge/Skill gaps. HR & Labor uniquely reports Org Structure as its top barrier — potentially reflecting the cross-functional nature of HR work.
      </div>
    </div>
  </>);
}

// ─── PAGE 15: Targeted Cohorts ──────────────────────────

function Page15() {
  return (<>
    <div className="card">
      <h1>Structured programs drive outsized adoption</h1>
      <h2>Targeted Cohort Performance</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={targetedCohorts} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} label={{ value: 'Adoption Rate %', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
            <YAxis type="category" dataKey="cohort" width={140} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="rate" fill={BLUE} radius={[0,4,4,0]}>
              <LabelList dataKey="rate" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 4} y={y + 12} fill="#393939" fontSize={10}>{value}%</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="data-table">
        <thead><tr><th>Cohort</th><th>Total</th><th>On Nadia</th><th>Adoption %</th><th>Avg Convos</th></tr></thead>
        <tbody>
          {targetedCohorts.map((r, i) => (
            <tr key={i} className={r.rate >= 85 ? 'highlight' : ''}>
              <td>{r.cohort}</td><td>{r.total}</td><td>{r.nadia}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout callout-green">
        <strong>Proof of model:</strong> GTM (98.2%), DLA (91.4%), and Learning (87.3%) demonstrate that structured program integration drives near-universal adoption AND deeper engagement (17-32 avg convos vs. 6.6 for general merit). This is the playbook for scaling.
      </div>
    </div>
  </>);
}

// ─── PAGE 16: Activation Formula ────────────────────────

function Page16() {
  return (<>
    <div className="card">
      <h1>What makes a high-adoption BU different?</h1>
      <h2>The Activation Formula</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={activationFormula}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dimension" tick={{ fontSize: 11 }} />
            <YAxis label={{ value: '%', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" fill={BLUE} name="High-Adoption BUs (top 5)" radius={[4,4,0,0]}>
              <LabelList dataKey="high" content={renderPctLabel} />
            </Bar>
            <Bar dataKey="low" fill="#DFDFDF" name="Low-Adoption BUs (bottom 5)" radius={[4,4,0,0]}>
              <LabelList dataKey="low" content={renderPctLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        High-adoption BUs have nearly 3x the Teams connection rate (66% vs 24%) and 3.5x the Calendar connection rate (43% vs 12%). They also have a higher share of frontline leaders (28% vs 21%). Integration infrastructure predicts adoption success.
      </div>
    </div>
  </>);
}

// ─── PAGE 17: HiPo Cohort ───────────────────────────────

function Page17() {
  return (<>
    <div className="card">
      <h1>High-potential employees are Nadia power users</h1>
      <h2>HiPo Cohort Analysis</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">DLA</div><div className="kpi-label">91.4% adoption</div><div className="kpi-sub">32.0 avg conversations</div></div>
        <div className="kpi"><div className="kpi-value">GTM</div><div className="kpi-label">98.2% adoption</div><div className="kpi-sub">19.8 avg conversations</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #9A31AF, #0009B4)'}}><div className="kpi-value">4.8x</div><div className="kpi-label">DLA vs General Merit engagement</div></div>
      </div>
      <div className="narrative">
        Delta Leadership Academy participants average 32.0 conversations — 4.8x the general merit population. GTM participants average 19.8 conversations with 98.2% adoption. These cohorts validate Nadia as a development accelerator for the leadership pipeline. The question for CHRO: can we expand this model to more high-potential programs?
      </div>
    </div>
  </>);
}

// ─── PAGE 18: Recommendations ───────────────────────────

function Page18() {
  return (<>
    <div className="card">
      <h1>Recommended actions for the next 90 days</h1>
      <h2>Strategic Recommendations</h2>
      <div className="rec-grid">
        <div className="rec-card">
          <h4>1. Push Integration Adoption</h4>
          <div className="rec-stat">56% untapped</div>
          <p>3,572 users (56%) have neither Teams nor Calendar connected. This is the single highest-ROI intervention — users with both integrations engage 2.3x more. Target IT and TechOps BUs first (largest populations, lowest integration rates).</p>
        </div>
        <div className="rec-card">
          <h4>2. Scale Connect for FLLs</h4>
          <div className="rec-stat">3.7x multiplier</div>
          <p>Only 61 of 1,373 FLLs have used Connect sessions. Those who have average 31.1 conversations vs. 9.3. Roll out Connect to Airport Customer Service (950 FLLs) and Inflight Services (336 FLLs) first.</p>
        </div>
        <div className="rec-card">
          <h4>3. Crack Under-Penetrated BUs</h4>
          <div className="rec-stat">TechOps + IT = 4,430</div>
          <p>TechOps (31% adoption) and IT (34%) are the two largest BUs and together represent 4,430 employees. Apply the structured-program playbook that drove 85-98% adoption in targeted cohorts.</p>
        </div>
        <div className="rec-card">
          <h4>4. Improve Goal Quality</h4>
          <div className="rec-stat">90% lack timing</div>
          <p>90% of goals lack time specificity and 62% aren't measurable. Build SMART goal prompting into Nadia's goal-setting flow. This is both a product improvement and a coaching quality lever.</p>
        </div>
        <div className="rec-card full-width">
          <h4>5. Bridge the Influencing Skills Gap</h4>
          <div className="rec-stat">3.3x gap ratio</div>
          <p>Influencing Skills has the largest gap between demonstrated capability (2.6%) and growth opportunity (8.7%). It's also the #1 skill needed at the Leadership (11-13) grade band. Build targeted coaching pathways for this skill, especially for emerging leaders transitioning from senior individual contributor roles.</p>
        </div>
      </div>
    </div>
  </>);
}

// ─── Pages array ────────────────────────────────────────

const pages = [Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page16, Page10, Page11, Page12, Page13, Page14, Page18];
const pageNames = [
  'Executive Summary', 'Growth Timeline', 'Integration Effect',
  'BU & Grade Adoption', 'BU Quality Matrix', 'Grade Level Chart',
  'Career Level Deep Dive', 'Station / Location', 'Frontline Leaders',
  'Activation Formula',
  'Skills Landscape', 'Skills for Goal Achievement',
  'Goal Engagement', 'Goal Barriers & Skills', 'Goal Barriers by BU',
  'Recommendations'
];

const navSections = [
  { label: 'Overview', pages: [0, 1, 2] },
  { label: 'Adoption', pages: [3, 4, 5, 6, 7, 8, 9] },
  { label: 'Skills & Goals', pages: [10, 11, 12, 13, 14] },
  { label: 'Strategy', pages: [15] },
];

// ─── APP ────────────────────────────────────────────────

function App() {
  const [page, setPage] = useState(0);
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');

  if (!authed) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--cream)' }}>
        <div className="card" style={{ maxWidth: 400, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-accent)', fontSize: 28, marginBottom: 8 }}>Nadia at Delta</h1>
          <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 24 }}>Enter the access code to view this dashboard</p>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && pw === 'Delta_Valence2026') setAuthed(true); }}
            placeholder="Access code"
            style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #DFDFDF', fontSize: 14, fontFamily: 'var(--font-primary)', marginBottom: 12 }}
          />
          <button onClick={() => { if (pw === 'Delta_Valence2026') setAuthed(true); }}
            style={{ width: '100%', padding: '10px 16px', borderRadius: 8, background: BLUE, color: 'white', border: 'none', cursor: 'pointer', fontSize: 14, fontFamily: 'var(--font-primary)' }}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  const PageComponent = pages[page];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Nadia at Delta</h2>
          <p>AI Coaching Analytics — March 2026</p>
        </div>
        {navSections.map((section, si) => (
          <div key={si}>
            <div className="nav-section">{section.label}</div>
            {section.pages.map(pi => (
              <div key={pi} className={`nav-item ${page === pi ? 'active' : ''}`} onClick={() => setPage(pi)}>
                {pageNames[pi]}
              </div>
            ))}
          </div>
        ))}
      </aside>
      <main className="main">
        <div className="page-nav">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
          <span className="page-counter">{page + 1} / {pages.length}</span>
          <button disabled={page === pages.length - 1} onClick={() => setPage(page + 1)}>Next</button>
        </div>
        <PageComponent />
      </main>
    </div>
  );
}

export default App;
