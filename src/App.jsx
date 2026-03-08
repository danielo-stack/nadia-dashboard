import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, ComposedChart, Line, ScatterChart, Scatter, ZAxis,
  LabelList
} from 'recharts';
import {
  kpis, integrationEffect, integrationImpact, buData,
  gradeData, careerLevelData, fllData,
  skillsLandscape, skillsFilterBu, skillsFilterCareer, skillsFilterGrade,
  goalSkillsAnalysis, goalEngagementBu, goalEngagementGrade,
  barriersByGradeBand, skillsForGoalsByBand,
  goalQuality, goalBarriersByBu, monthlyTimeline
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

// ─── PAGE 1: Growth Timeline (combined with Exec Summary) ──

function Page1() {
  const chartData = monthlyTimeline.map(m => ({
    ...m,
    totalActive: m.newUsers + m.returnUsers,
  }));
  return (<>
    <div className="card">
      <h1>Nadia at Delta: AI coaching adoption overview</h1>
      <h2>Growth Timeline — March 2026</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">14,602</div><div className="kpi-label">Total Registered Users</div></div>
        <div className="kpi"><div className="kpi-value">6,373</div><div className="kpi-label">Total Active Nadia Users</div><div className="kpi-sub">43.6% adoption</div></div>
        <div className="kpi"><div className="kpi-value">51.5%</div><div className="kpi-label">Return Rate</div><div className="kpi-sub">3,284 users with 3+ conversations</div></div>
        <div className="kpi"><div className="kpi-value">50,218</div><div className="kpi-label">Total Coaching Conversations</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #0084F0, #003FDC)', gridColumn: 'span 2'}}><div className="kpi-value">7.9</div><div className="kpi-label">Average Conversations per Active User</div></div>
      </div>
      <div className="chart-container" style={{ marginTop: 16 }}>
        <h3 style={{ marginBottom: 8 }}>Monthly Active Users — New vs. Returning</h3>
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis label={{ value: 'Active Users', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#393939' } }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="returnUsers" stackId="users" fill={BLUE} name="Returning Users" />
            <Bar dataKey="newUsers" stackId="users" fill={BRIGHT_BLUE} name="New Users" radius={[4,4,0,0]}>
              <LabelList dataKey="totalActive" content={(props) => {
                const { x, y, width, value } = props;
                if (!value || value < 50) return null;
                return <text x={x + width / 2} y={y - 6} fill="#393939" fontSize={9} fontWeight={500} textAnchor="middle">{value.toLocaleString()}</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Nadia's growth follows Delta's talent calendar. The largest activation events were the year-end performance review cycle (December 2025 — 3,200 active users) and the annual goal-setting process (February 2026 — 4,500 active users). Embedding Nadia into formal talent processes is the most effective adoption driver. The strategic question is: how do we sustain engagement between these formal cycles?
      </div>
      <div className="callout">
        <strong>Key milestone:</strong> Return users outnumber new users 2:1 in the most recent months, indicating growing stickiness. The Dec 2025 - Feb 2026 window saw the highest sustained activity, coinciding with year-end reviews and goal-setting.
      </div>
    </div>
  </>);
}

// ─── PAGE 2: Integration Effect ─────────────────────────

function Page2() {
  return (<>
    <div className="card">
      <h1>Connecting Teams and Calendar doubles engagement</h1>
      <h2>The Integration Effect</h2>
      <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 16 }}>When employees connect their Microsoft Teams and Calendar to Nadia, their coaching engagement increases dramatically. This is the single highest-leverage intervention for driving deeper, more sustained coaching across the organization.</p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={integrationEffect} layout="vertical" margin={{ left: 10, right: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Average Coaching Conversations per User', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} tick={{ fontSize: 10 }} />
            <YAxis type="category" dataKey="label" width={180} tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => [`${value} conversations`, 'Average']} />
            <Bar dataKey="avgConvos" fill={BLUE} radius={[0,4,4,0]}>
              <LabelList dataKey="avgConvos" content={(props) => {
                const { x, y, width, value } = props;
                return <text x={x + width + 6} y={y + 14} fill="#393939" fontSize={11} fontWeight={500}>{value} avg</text>;
              }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 12 }}>
          {integrationEffect.map((r, i) => (
            <div key={i} style={{ fontSize: 12, padding: '6px 12px', background: '#E8E9FD', borderRadius: 8 }}>
              <strong>{r.label}</strong>: {r.users.toLocaleString()} users
            </div>
          ))}
        </div>
      </div>
      <div className="narrative">
        Users who connect both Teams and Calendar average <strong>12.2 coaching conversations</strong> — more than double the 5.3 conversations from users with no integrations. Even connecting Teams alone lifts engagement to 9.5 conversations, an 80% increase. With 3,572 users (56%) currently without any integration, this is the largest untapped engagement opportunity.
      </div>
    </div>
    <div className="card">
      <h2>Integration Engagement Multipliers</h2>
      <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 20 }}>Each integration creates a measurable lift in coaching depth. The chart below shows the before-and-after impact of connecting each integration.</p>
      {integrationImpact.map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, padding: '16px 20px', background: '#f8f8f8', borderRadius: 12 }}>
          <div style={{ flex: '0 0 160px' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#393939' }}>{r.factor}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#9A9A9A', marginBottom: 4 }}>Not Connected</div>
              <div style={{ background: '#DFDFDF', borderRadius: 8, padding: '8px 16px' }}>
                <div style={{ fontSize: 20, fontWeight: 300, fontFamily: 'var(--font-accent)' }}>{r.withoutAvg}</div>
                <div style={{ fontSize: 10, color: '#9A9A9A' }}>{r.withoutUsers.toLocaleString()} users</div>
              </div>
            </div>
            <div style={{ fontSize: 24, color: PINK, fontWeight: 500 }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#9A9A9A', marginBottom: 4 }}>Connected</div>
              <div style={{ background: '#E8E9FD', borderRadius: 8, padding: '8px 16px', border: `2px solid ${BLUE}` }}>
                <div style={{ fontSize: 20, fontWeight: 300, fontFamily: 'var(--font-accent)', color: BLUE }}>{r.withAvg}</div>
                <div style={{ fontSize: 10, color: '#9A9A9A' }}>{r.withUsers.toLocaleString()} users</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginLeft: 8 }}>
              <div style={{ fontSize: 28, fontWeight: 300, fontFamily: 'var(--font-accent)', color: PINK }}>{r.multiplier}</div>
              <div style={{ fontSize: 10, color: '#9A9A9A' }}>multiplier</div>
            </div>
          </div>
        </div>
      ))}
      <div className="narrative">
        Across all three integration dimensions, the engagement multiplier is remarkably consistent: <strong>Teams drives a 1.9x lift</strong> (11.0 vs. 5.7 average conversations), <strong>Calendar delivers the same 1.9x lift</strong> (12.3 vs. 6.4), and <strong>both integrations together yield a 1.8x multiplier</strong> (12.2 vs. 6.7). Every percentage point increase in integration adoption directly translates to deeper coaching engagement and more sustained behavior change.
      </div>
      <div className="callout callout-green">
        <strong>The bottom line:</strong> Integration is the primary driver of coaching depth. Connecting Teams and Calendar for the 3,572 users currently without integrations could generate an estimated 15,000+ additional coaching conversations based on observed multipliers.
      </div>
    </div>
  </>);
}

// ─── PAGE 3: BU Adoption & Adoption Matrix ───────────────

function Page3() {
  const bubbleData = buData.filter(b => b.pop >= 150).map(b => ({
    x: b.rate, y: b.avgConvos, z: b.nadia, fullName: b.bu,
  }));
  return (<>
    <div className="card">
      <h1>Adoption varies widely by business unit</h1>
      <h2>Business Unit Adoption — Sorted by Population</h2>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>Addressable Population</th><th>Nadia Users</th><th>% Using Nadia</th><th>Avg Coaching Convos per User</th><th>% Activated Teams</th><th>% Integrated Calendar</th></tr></thead>
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
      <h2>BU Adoption Adoption Matrix</h2>
      <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 12 }}>Bubble size represents number of Nadia users. Hover over each bubble for details.</p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={480}>
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
            <Scatter data={bubbleData} fill={BLUE} fillOpacity={0.7} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        {bubbleData.map((b, i) => (
          <div key={i} style={{ fontSize: 10, background: '#E8E9FD', borderRadius: 6, padding: '4px 8px' }}>
            <strong>{b.fullName}</strong>: {b.x}% adoption, {b.y} avg convos
          </div>
        ))}
      </div>
      <div className="callout callout-green" style={{ marginTop: 12 }}>
        <strong>Stars:</strong> HR & Labor (83% adoption, 11.2 avg convos), Reservations & Cust. Care (67%, 20.1), and DLV Operations (15%, but 25.8 avg convos — small but deeply engaged).
      </div>
      <div className="callout callout-red">
        <strong>Opportunity:</strong> TechOps (2,331 employees, 31% adoption, 5.5 avg convos) and IT (2,099 employees, 34%, 4.5 avg convos) are the two largest BUs with below-average adoption and engagement depth.
      </div>
    </div>
  </>);
}

// ─── PAGE 4: Grade Level Adoption & Adoption Matrix ──────

function Page4() {
  const gradeChart = gradeData.map(g => ({ ...g, name: `Grade ${g.grade}` }));
  const gradeBubble = gradeData.filter(g => g.pop >= 100).map(g => ({
    x: g.rate, y: g.avgConvos, z: g.nadia, fullName: `Grade ${g.grade}`,
  }));
  return (<>
    <div className="card">
      <h1>Adoption rate increases with seniority</h1>
      <h2>Grade Level Adoption — Sorted by Population</h2>
      <table className="data-table">
        <thead><tr><th>Grade</th><th>Addressable Population</th><th>Nadia Users</th><th>% Using Nadia</th><th>Avg Coaching Convos per User</th><th>% Activated Teams</th><th>% Integrated Calendar</th></tr></thead>
        <tbody>
          {gradeData.map((r, i) => (
            <tr key={i} className={r.rate >= 55 ? 'highlight' : r.rate < 30 ? 'danger' : ''}>
              <td>{r.grade}</td><td>{r.pop.toLocaleString()}</td><td>{r.nadia.toLocaleString()}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td><td>{r.teamsPct}%</td><td>{r.calPct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="card">
      <h2>Grade Level Adoption Matrix</h2>
      <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 12 }}>Bubble size represents number of Nadia users. Hover over each bubble for details.</p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="Adoption %" unit="%" label={{ value: 'Adoption Rate (%)', position: 'insideBottom', offset: -10, style: { fontSize: 12 } }} />
            <YAxis type="number" dataKey="y" name="Avg Convos" label={{ value: 'Avg Conversations', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
            <ZAxis type="number" dataKey="z" range={[80, 500]} name="Users" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
              if (!payload || !payload.length) return null;
              const d = payload[0].payload;
              return (<div style={{ background: 'white', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 12 }}>
                <strong>{d.fullName}</strong><br/>Adoption: {d.x}% | Avg Convos: {d.y}<br/>Users: {d.z.toLocaleString()}
              </div>);
            }} />
            <Scatter data={gradeBubble} fill={PINK} fillOpacity={0.7} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        {gradeBubble.map((b, i) => (
          <div key={i} style={{ fontSize: 10, background: '#E8E9FD', borderRadius: 6, padding: '4px 8px' }}>
            <strong>{b.fullName}</strong>: {b.x}% adoption, {b.y} avg convos
          </div>
        ))}
      </div>
      <div className="callout">
        <strong>Pattern:</strong> Grade 7S (frontline leaders) leads adoption at 60.6% with 11.5 avg convos, followed by Grade 11 (54.5%) and Grade 10 (53.4%). Entry-level grades (4-5) and very senior grades (14+) show the lowest adoption — likely different intervention strategies are needed for each end.
      </div>
    </div>
  </>);
}

// ─── PAGE 5: Career Level Adoption & Adoption Matrix ─────

function Page5() {
  const sorted = [...careerLevelData].sort((a, b) => b.rate - a.rate);
  const careerBubble = careerLevelData.filter(c => c.pop >= 50).map(c => ({
    x: c.rate, y: c.avgConvos, z: c.nadia, fullName: c.level,
  }));
  return (<>
    <div className="card">
      <h1>Frontline leaders and senior managers lead adoption</h1>
      <h2>Career Level Adoption — Sorted by Adoption Rate</h2>
      <table className="data-table">
        <thead><tr><th>Career Level</th><th>Addressable Population</th><th>Nadia Users</th><th>% Using Nadia</th><th>Avg Coaching Convos per User</th></tr></thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={i} className={r.rate >= 55 ? 'highlight' : r.rate < 35 ? 'danger' : ''}>
              <td>{r.level}</td><td>{r.pop.toLocaleString()}</td><td>{r.nadia.toLocaleString()}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="card">
      <h2>Career Level Adoption Matrix</h2>
      <p style={{ fontSize: 13, color: '#9A9A9A', marginBottom: 12 }}>Bubble size represents number of Nadia users. Hover over each bubble for details.</p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={420}>
          <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="Adoption %" unit="%" label={{ value: 'Adoption Rate (%)', position: 'insideBottom', offset: -10, style: { fontSize: 12 } }} />
            <YAxis type="number" dataKey="y" name="Avg Convos" label={{ value: 'Avg Conversations', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
            <ZAxis type="number" dataKey="z" range={[60, 500]} name="Users" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
              if (!payload || !payload.length) return null;
              const d = payload[0].payload;
              return (<div style={{ background: 'white', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 12 }}>
                <strong>{d.fullName}</strong><br/>Adoption: {d.x}% | Avg Convos: {d.y}<br/>Users: {d.z.toLocaleString()}
              </div>);
            }} />
            <Scatter data={careerBubble} fill={PURPLE} fillOpacity={0.7} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        {careerBubble.map((b, i) => (
          <div key={i} style={{ fontSize: 10, background: '#E8E9FD', borderRadius: 6, padding: '4px 8px' }}>
            <strong>{b.fullName}</strong>: {b.x}% adoption, {b.y} avg convos
          </div>
        ))}
      </div>
      <div className="narrative">
        Frontline Leaders (61.1% adoption, 11.5 avg convos) and Sr. Managers (58.5%, 11.8) sit in the top-right quadrant — high adoption AND deep engagement. Individual contributors (Specialists at 38.2%, Analysts at 31.1%) show lower adoption but still meaningful engagement when they do adopt. The VP and Sr. VP levels have the lowest adoption, likely reflecting different coaching needs at the executive tier.
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
        <thead><tr><th>Business Unit</th><th>Addressable Population</th><th>Nadia Users</th><th>% Using Nadia</th><th>Avg Coaching Convos per User</th><th>% Activated Teams</th><th>% Integrated Calendar</th><th>Connect Users</th></tr></thead>
        <tbody>
          {fllData.fllByBu.map((r, i) => (
            <tr key={i}>
              <td>{r.bu}</td><td>{r.total}</td><td>{r.nadia}</td>
              <td><strong>{r.rate}%</strong></td><td>{r.avgConvos}</td><td>{r.teamsPct}%</td><td>{r.calPct}%</td><td>{r.connectUsers || '—'}</td>
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
  const [buFilter, setBuFilter] = useState('all');
  const [careerFilter, setCareerFilter] = useState('all');
  const [gradeFilter, setGradeFilter] = useState('all');

  const selectStyle = {
    padding: '6px 12px', borderRadius: 8, border: '1px solid #DFDFDF', fontSize: 12,
    fontFamily: 'var(--font-primary)', background: 'white', cursor: 'pointer', minWidth: 180,
  };

  // Determine which filter is active (only one at a time)
  const getDisplayData = () => {
    let source = null;
    let totalUsers = 6373;

    if (buFilter !== 'all') {
      source = skillsFilterBu[buFilter];
    } else if (careerFilter !== 'all') {
      source = skillsFilterCareer[careerFilter];
    } else if (gradeFilter !== 'all') {
      source = skillsFilterGrade[gradeFilter];
    }

    if (source) {
      totalUsers = source.total;
      if (totalUsers < 10) return { data: null, totalUsers };
      const allSkills = new Set([...source.exhibited.map(s => s.skill), ...source.opportunity.map(s => s.skill)]);
      const data = Array.from(allSkills).map(skill => {
        const ex = source.exhibited.find(s => s.skill === skill);
        const op = source.opportunity.find(s => s.skill === skill);
        const exCount = ex ? ex.count : 0;
        const opCount = op ? op.count : 0;
        return {
          skill,
          exhibitedPct: Math.round(exCount / totalUsers * 100),
          opportunityPct: Math.round(opCount / totalUsers * 100),
        };
      }).sort((a, b) => b.exhibitedPct - a.exhibitedPct).slice(0, 10);
      return { data, totalUsers };
    }

    // Default: all users
    return {
      data: skillsLandscape.slice(0, 12).map(s => ({
        skill: s.skill,
        exhibitedPct: Math.round(s.exhibitedPct),
        opportunityPct: Math.round(s.opportunityPct),
      })),
      totalUsers: 6373,
    };
  };

  const { data: displayData, totalUsers } = getDisplayData();

  const handleBu = (v) => { setBuFilter(v); if (v !== 'all') { setCareerFilter('all'); setGradeFilter('all'); } };
  const handleCareer = (v) => { setCareerFilter(v); if (v !== 'all') { setBuFilter('all'); setGradeFilter('all'); } };
  const handleGrade = (v) => { setGradeFilter(v); if (v !== 'all') { setBuFilter('all'); setCareerFilter('all'); } };

  return (<>
    <div className="card">
      <h1>What skills are Delta employees demonstrating?</h1>
      <h2>Skills Landscape — Percent Exhibited vs. Growth Opportunity</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 500, display: 'block', marginBottom: 4, color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Business Unit</label>
          <select value={buFilter} onChange={e => handleBu(e.target.value)} style={selectStyle}>
            <option value="all">All Business Units</option>
            {Object.keys(skillsFilterBu).sort().map(bu => <option key={bu} value={bu}>{bu}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 500, display: 'block', marginBottom: 4, color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Career Level</label>
          <select value={careerFilter} onChange={e => handleCareer(e.target.value)} style={selectStyle}>
            <option value="all">All Career Levels</option>
            {Object.keys(skillsFilterCareer).sort().map(cl => <option key={cl} value={cl}>{cl}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 500, display: 'block', marginBottom: 4, color: '#9A9A9A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Job Grade</label>
          <select value={gradeFilter} onChange={e => handleGrade(e.target.value)} style={selectStyle}>
            <option value="all">All Grade Levels</option>
            {Object.keys(skillsFilterGrade).sort((a,b) => parseInt(a) - parseInt(b) || a.localeCompare(b)).map(g => <option key={g} value={g}>Grade {g}</option>)}
          </select>
        </div>
      </div>
      {!displayData ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#9A9A9A', fontSize: 14, background: '#f8f8f8', borderRadius: 12 }}>
          Insufficient data — fewer than 10 users in this filtered group.
        </div>
      ) : (
        <>
          <p style={{ fontSize: 12, color: '#9A9A9A', marginBottom: 8 }}>Showing data for {totalUsers.toLocaleString()} users. Each bar shows the percentage of users in this group.</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={420}>
              <BarChart data={displayData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 'auto']} label={{ value: 'Percent of Users (%)', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} unit="%" />
                <YAxis type="category" dataKey="skill" width={140} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="exhibitedPct" fill={BLUE} name="Exhibited (%)" radius={[0,4,4,0]} />
                <Bar dataKey="opportunityPct" fill={PINK} name="Growth Opportunity (%)" radius={[0,4,4,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
      <div className="narrative">
        Communication is the most commonly exhibited skill (63% of users), but also the top growth area. The most striking gap is <strong>Influencing Skills</strong> — exhibited by only 3% of users but flagged as a growth opportunity for 9%, a 3.3x gap ratio. Digital Fluency and Developing Others also show significant development potential across the organization.
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

const pages = [Page1, Page2, Page3, Page4, Page5, Page9, Page10, Page11, Page12, Page13, Page14, Page18];
const pageNames = [
  'Growth Timeline', 'Integration Effect',
  'BU Adoption', 'Grade Level Adoption', 'Career Level Adoption',
  'Frontline Leaders',
  'Skills Landscape', 'Skills for Goal Achievement',
  'Goal Engagement', 'Goal Barriers & Skills', 'Goal Barriers by BU',
  'Recommendations'
];

const navSections = [
  { label: 'Overview', pages: [0, 1] },
  { label: 'Adoption', pages: [2, 3, 4, 5] },
  { label: 'Skills & Goals', pages: [6, 7, 8, 9, 10] },
  { label: 'Strategy', pages: [11] },
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
            onKeyDown={e => { if (e.key === 'Enter' && pw.trim() === 'Delta_Valence2026') setAuthed(true); }}
            placeholder="Access code"
            style={{ width: '100%', padding: '10px 16px', borderRadius: 8, border: '1px solid #DFDFDF', fontSize: 14, fontFamily: 'var(--font-primary)', marginBottom: 12 }}
          />
          <button onClick={() => { if (pw.trim() === 'Delta_Valence2026') setAuthed(true); }}
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
