import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, ComposedChart, Line, ScatterChart, Scatter, ZAxis
} from 'recharts';
import {
  kpis, engagementTiers, integrationEffect, retentionVsChurn, buData,
  gradeData, careerLevelData, subFamilyData, fllData, beyondPerfMgmt,
  skillsExhibited, skillGaps, skillsByPopulation, skillsByGradeBand,
  goalQuality, goalBarriersByBu, targetedCohorts, monthlyActivity,
  activationFormula, stationData
} from './data';
import './App.css';

// Valence brand colors
const NAVY = '#003FDC';
const RED = '#FF2891';
const GREEN = '#0084F0';
const AMBER = '#9A31AF';
const DARK_BLUE = '#0009B4';
const COLORS = ['#003FDC', '#FF2891', '#0084F0', '#9A31AF', '#0009B4', '#DF217E', '#C4C8F8', '#393939'];

// ─── PAGES ──────────────────────────────────────────────

function Page1() {
  return (<>
    <div className="card">
      <h1>Nadia at Delta: AI Coaching Adoption Overview</h1>
      <h2>Executive Summary — March 2026</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">14,602</div><div className="kpi-label">Total Merit Population</div></div>
        <div className="kpi"><div className="kpi-value">6,373</div><div className="kpi-label">Nadia Users</div><div className="kpi-sub">43.6% adoption</div></div>
        <div className="kpi"><div className="kpi-value">50,218</div><div className="kpi-label">Total Conversations</div></div>
        <div className="kpi"><div className="kpi-value">2,923</div><div className="kpi-label">Active Last 30 Days</div><div className="kpi-sub">45.9% of users</div></div>
        <div className="kpi"><div className="kpi-value">3</div><div className="kpi-label">Median Conversations</div></div>
        <div className="kpi"><div className="kpi-value">1,025</div><div className="kpi-label">Users with 10+ Convos</div><div className="kpi-sub">16.1% of users</div></div>
      </div>
      <div className="narrative">
        As of March 2026, Nadia has reached 43.6% of Delta's merit population, with over 50,000 coaching conversations logged since launch. Nearly half of all Nadia users (46%) have been active in the last 30 days, driven by the year-end review and goal-setting cycles. The core challenge is engagement depth — the median user has had only 3 conversations, and 48.5% of users remain in "trial mode" with just 1-2 interactions.
      </div>
    </div>
  </>);
}

function Page2() {
  return (<>
    <div className="card">
      <h1>Adoption Has Been Driven by Talent Process Integration</h1>
      <h2>Growth Timeline</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyActivity}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={60} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill={NAVY} radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Nadia's growth follows Delta's talent calendar. The largest activation events were the year-end performance review cycle (December 2025 — 1,210 users) and the annual goal-setting process (January-February 2026 — 3,762 users). Embedding Nadia into formal talent processes is the most effective adoption driver. The strategic question is: how do we sustain engagement between these formal cycles?
      </div>
      <div className="callout">
        <strong>Key milestone:</strong> 78% of all Nadia users were last active in the Dec 2025 - Feb 2026 window, coinciding with year-end reviews and goal-setting.
      </div>
    </div>
  </>);
}

function Page3() {
  return (<>
    <div className="card">
      <h1>Nearly Half of Users Are Still in Trial Mode</h1>
      <h2>Engagement Depth Pyramid</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementTiers} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="tier" type="category" width={120} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="users" fill={NAVY} radius={[0,4,4,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="data-table">
        <thead><tr><th>Tier</th><th>Users</th><th>% of Total</th><th>Avg Goal Sessions</th><th>Teams %</th><th>Calendar %</th></tr></thead>
        <tbody>
          {engagementTiers.map((t, i) => (
            <tr key={i} className={i === 0 ? 'danger' : i >= 3 ? 'highlight' : ''}>
              <td><strong>{t.tier}</strong></td><td>{t.users.toLocaleString()}</td><td>{t.pct}%</td>
              <td>{t.avgGoals}</td><td>{t.teamsPct}%</td><td>{t.calPct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        48.5% of Nadia users have had only 1-2 conversations — they tried it, likely during a talent moment, but haven't returned. This "Trial" tier is the single largest opportunity. The data shows a clear pattern: integration adoption (Teams and Calendar) correlates strongly with moving up the engagement ladder. Only 24% of Trial users have Teams connected vs. 65%+ for Active/Power users.
      </div>
    </div>
  </>);
}

function Page4() {
  return (<>
    <div className="card">
      <h1>Connecting Teams + Calendar = 2.3x More Engagement</h1>
      <h2>The Integration Effect</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={integrationEffect}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} />
            <YAxis label={{ value: 'Avg Conversations', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={NAVY} radius={[4,4,0,0]}>
              {integrationEffect.map((_, i) => <Cell key={i} fill={i === 0 ? GREEN : i === 3 ? RED : NAVY} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">41%</div><div className="kpi-label">Teams Connected</div><div className="kpi-sub">2,632 of 6,373</div></div>
        <div className="kpi"><div className="kpi-value">25%</div><div className="kpi-label">Calendar Connected</div><div className="kpi-sub">1,572 of 6,373</div></div>
        <div className="kpi" style={{background: 'linear-gradient(135deg, #0084F0 0%, #003FDC 100%)'}}><div className="kpi-value">2.3x</div><div className="kpi-label">Engagement Multiplier</div><div className="kpi-sub">Both vs. Neither</div></div>
      </div>
      <div className="narrative">
        Users who connect both Teams and Calendar average 12.2 conversations — 2.3x more than those with neither integration. Integration makes Nadia contextually relevant to daily work. Current integration rates (41% Teams, 25% Calendar) represent a significant untapped opportunity. Moving Calendar adoption from 25% to 40% would drive meaningful engagement uplift.
      </div>
    </div>
  </>);
}

function Page5() {
  return (<>
    <div className="card">
      <h1>76% of Churned Users Never Got Past 2 Conversations</h1>
      <h2>Retention vs. Churn Profile</h2>
      <table className="data-table">
        <thead><tr><th>Metric</th><th>Retained (&lt;90d)</th><th>Churned (&gt;90d)</th><th>Delta</th></tr></thead>
        <tbody>
          <tr><td><strong>Count</strong></td><td>4,815 (75.6%)</td><td className="danger">1,558 (24.4%)</td><td></td></tr>
          <tr><td><strong>Avg Conversations</strong></td><td>9.6</td><td className="danger">2.5</td><td style={{color:RED}}>-74%</td></tr>
          <tr><td><strong>Teams Connected</strong></td><td>51%</td><td className="danger">12%</td><td style={{color:RED}}>-39 pts</td></tr>
          <tr><td><strong>Calendar Connected</strong></td><td>31%</td><td className="danger">6%</td><td style={{color:RED}}>-25 pts</td></tr>
          <tr><td><strong>Had Goal Session</strong></td><td>46%</td><td className="danger">0%</td><td style={{color:RED}}>-46 pts</td></tr>
        </tbody>
      </table>
      <div className="callout callout-red">
        <strong>Critical finding:</strong> Zero churned users had completed a goal session. Goal-setting is effectively an anti-churn mechanism.
      </div>
      <div className="narrative">
        The churn profile is stark: churned users averaged just 2.5 conversations, only 12% had Teams connected, and zero had completed a goal session. This suggests a clear "activation formula" — getting a user to connect an integration and complete a goal session within their first few interactions dramatically increases retention. The data points to conversation #3 as the critical threshold.
      </div>
    </div>
  </>);
}

function Page6() {
  return (<>
    <div className="card">
      <h1>Adoption Ranges from 5% to 83% Across Business Units</h1>
      <h2>Business Unit Adoption Heatmap</h2>
      <div style={{overflowX: 'auto'}}>
        <table className="data-table">
          <thead><tr><th>Business Unit</th><th>Pop</th><th>Nadia</th><th>Rate</th><th>Avg Convos</th><th>Median</th><th>Teams %</th><th>Active 30d %</th></tr></thead>
          <tbody>
            {buData.map((b, i) => (
              <tr key={i} className={b.rate >= 60 ? 'highlight' : b.rate < 15 ? 'danger' : b.rate < 35 ? 'warning' : ''}>
                <td><strong>{b.bu}</strong></td><td>{b.pop.toLocaleString()}</td><td>{b.nadia.toLocaleString()}</td>
                <td><strong>{b.rate}%</strong></td><td>{b.avgConvos}</td><td>{b.median}</td>
                <td>{b.teamsPct}%</td><td>{b.active30Pct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="narrative">
        HR & Labor leads at 83% — expected as the sponsoring function. The standout is Reservations & Customer Care: 67% adoption AND the highest conversation depth at 20.1 avg — they've found genuine, repeated value. The biggest opportunities are TechOps (2,331 employees, 31%) and IT (2,099, 34%) — together representing 4,400 employees, or 30% of the merit population.
      </div>
    </div>
  </>);
}

function Page7() {
  const scatterData = buData.map(b => ({
    name: b.bu.length > 20 ? b.bu.substring(0, 20) + '...' : b.bu,
    fullName: b.bu,
    x: b.rate, y: b.avgConvos, z: b.pop
  }));
  return (<>
    <div className="card">
      <h1>Not All Adoption Is Equal — Engagement Quality Varies</h1>
      <h2>Adoption Rate vs. Engagement Depth (bubble = population size)</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Adoption %" unit="%" domain={[0, 90]} label={{ value: 'Adoption Rate %', position: 'bottom', offset: 0 }} />
            <YAxis type="number" dataKey="y" name="Avg Convos" label={{ value: 'Avg Conversations', angle: -90, position: 'insideLeft' }} />
            <ZAxis type="number" dataKey="z" range={[40, 400]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0].payload;
              return <div style={{background:'white',padding:8,border:'1px solid #ddd',borderRadius:6,fontSize:12}}>
                <strong>{d.fullName}</strong><br/>Adoption: {d.x}% | Avg Convos: {d.y}<br/>Population: {d.z.toLocaleString()}
              </div>;
            }} />
            <Scatter data={scatterData} fill={NAVY} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-green">
        <strong>Hidden champion:</strong> DLV Operations — only 15% adopted, but those users average 25.8 conversations (highest of any BU). There are organic power users there worth identifying.
      </div>
      <div className="narrative">
        The 2x2 reveals four archetypes: <strong>Champions</strong> (Reservations, HR, Inflight, Cargo — high adoption + deep engagement), <strong>Adopted but Shallow</strong> (Legal, Rev Mgmt — broad awareness, low depth), <strong>Hidden Champions</strong> (DLV Operations — few users but deeply engaged), and <strong>Opportunity Zone</strong> (IT, GTH IT, Finance, DPS — low on both dimensions).
      </div>
    </div>
  </>);
}

function Page8() {
  return (<>
    <div className="card">
      <h1>Grade 7S Frontline Leaders Are the Most Engaged Grade</h1>
      <h2>Adoption & Engagement by Grade Level</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={gradeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="grade" tick={{ fontSize: 11 }} />
            <YAxis yAxisId="left" label={{ value: 'Adoption %', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Avg Convos', angle: 90, position: 'insideRight', style: { fontSize: 11 } }} />
            <Tooltip />
            <Bar yAxisId="left" dataKey="rate" fill={NAVY} radius={[4,4,0,0]} name="Adoption %" />
            <Line yAxisId="right" type="monotone" dataKey="avgConvos" stroke={RED} strokeWidth={2} dot={{ r: 4 }} name="Avg Conversations" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <table className="data-table">
        <thead><tr><th>Grade</th><th>Pop</th><th>Adoption</th><th>Avg Convos</th><th>Trial %</th><th>Power %</th></tr></thead>
        <tbody>
          {gradeData.map((g, i) => (
            <tr key={i} className={g.grade === '7S' || g.grade === '10' ? 'highlight' : g.powerPct === 0 ? 'warning' : ''}>
              <td><strong>{g.grade}</strong></td><td>{g.pop.toLocaleString()}</td><td>{g.rate}%</td>
              <td>{g.avgConvos}</td><td>{g.trialPct}%</td><td>{g.powerPct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        Grade 7S — the frontline leader grade — stands out with both the highest adoption rate (60.6%) and highest average conversations (11.5). Grade 10 (Sr. Manager level) is the second-most engaged. Grade 9 — a large population of 1,994 — has low adoption (34.5%) and the highest Trial rate (63%). Grade 14+ (VP+) shows zero Power users, suggesting an executive engagement gap.
      </div>
      <div className="callout">
        <strong>The "S" grades</strong> (7S, 9S) represent frontline leader grades. Their higher engagement validates Nadia's relevance for people-management use cases.
      </div>
    </div>
  </>);
}

function Page9() {
  return (<>
    <div className="card">
      <h1>Frontline Leaders and Sr. Managers Drive the Deepest Engagement</h1>
      <h2>Career Level Deep Dive</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={careerLevelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="level" type="category" width={180} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={NAVY} radius={[0,4,4,0]} name="Avg Conversations">
              {careerLevelData.map((d, i) => <Cell key={i} fill={d.avgConvos >= 10 ? GREEN : d.avgConvos < 4 ? RED : NAVY} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Sr. Managers (11.8 avg convos) and Frontline Leaders (11.5) are Nadia's most engaged career levels — the people-manager populations most responsible for performance conversations. Directors and Managing Directors adopt at decent rates (49-53%) but engage less deeply (5.4-5.9), suggesting they may need different use cases. SVPs at 1.6 avg conversations are barely engaging.
      </div>
    </div>
  </>);
}

function Page10() {
  return (<>
    <div className="card">
      <h1>Customer Contact Center and Talent Management Are Breakout Use Cases</h1>
      <h2>Sub-Family Spotlight</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={subFamilyData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="sf" type="category" width={200} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={NAVY} radius={[0,4,4,0]} name="Avg Conversations">
              {subFamilyData.map((d, i) => <Cell key={i} fill={d.avgConvos >= 15 ? GREEN : NAVY} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Customer Contact Center is the highest-engagement sub-family: 79% adoption, 21.2 avg conversations, and 45% of users in the Power tier. This group uses Nadia as a regular coaching tool, not just for talent processes. Crew Scheduling (13% adoption, 10.2 avg) is a "hidden champion" — very low adoption but the few who use it are deeply engaged.
      </div>
    </div>
  </>);
}

function Page11() {
  return (<>
    <div className="card">
      <h1>Where Exactly Should We Focus? Location-Level Analysis</h1>
      <h2>Station / Location Performance</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={stationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="station" tick={{ fontSize: 10 }} angle={-25} textAnchor="end" height={80} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="rate" fill={NAVY} name="Adoption %" radius={[4,4,0,0]} />
            <Line yAxisId="right" type="monotone" dataKey="avgConvos" stroke={RED} strokeWidth={2} dot={{ r: 4 }} name="Avg Conversations" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Atlanta dominates by volume, but the engagement story is nuanced. ATL Airport (frontline hub) has higher avg conversations (15.1) than the Admin Center (6.6), reflecting frontline leader engagement. Bangalore (GTH IT) is the lowest-engaging major location at 28% adoption, 3.2 avg convos. Minot, ND (DLV Operations hub) at 19.3 avg conversations is another hidden-champion location.
      </div>
    </div>
  </>);
}

function Page12() {
  return (<>
    <div className="card">
      <h1>Frontline Leaders Engage 38% More — But Connect Is Barely Live</h1>
      <h2>Frontline Leader Deep Dive</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">1,373</div><div className="kpi-label">FLLs in Nadia</div><div className="kpi-sub">10.2 avg conversations</div></div>
        <div className="kpi"><div className="kpi-value">4,646</div><div className="kpi-label">Scale ICs in Nadia</div><div className="kpi-sub">7.4 avg conversations</div></div>
        <div className="kpi" style={{background:'linear-gradient(135deg, #9A31AF 0%, #0009B4 100%)'}}><div className="kpi-value">61</div><div className="kpi-label">FLLs Using Connect</div><div className="kpi-sub">Only 4.4% of FLLs</div></div>
      </div>
      <h3 style={{marginTop:20}}>When Connect Works, It Works — 3.3x More Engagement</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={[
            { label: 'FLL with Connect', avgConvos: 31.1, users: 61 },
            { label: 'FLL without Connect', avgConvos: 9.3, users: 1312 },
          ]} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="label" type="category" width={180} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="avgConvos" fill={NAVY} radius={[0,4,4,0]}>
              <Cell fill={GREEN} />
              <Cell fill={NAVY} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h3>FLL Adoption by BU</h3>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>FLL Total</th><th>FLL in Nadia</th><th>Rate</th></tr></thead>
        <tbody>
          {fllData.fllByBu.map((b, i) => (
            <tr key={i}><td><strong>{b.bu}</strong></td><td>{b.total}</td><td>{b.nadia}</td><td><strong>{b.rate}%</strong></td></tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        Frontline leaders are 38% more engaged than Scale ICs (10.2 vs 7.4 avg conversations). But Delta Connect — the signature FLL feature — has reached only 61 users (4.4%). This is a distribution problem, not a product problem: the 61 FLLs using Connect average 31.1 conversations vs. 9.3 without. Connect is the stickiest use case — it just hasn't been distributed yet.
      </div>
    </div>
  </>);
}

function Page13() {
  const donutData = [
    { name: 'With Goal Sessions', value: beyondPerfMgmt.withGoals.count, fill: GREEN },
    { name: 'Organic Coaching (3+ convos, no goals)', value: beyondPerfMgmt.organicCoaching.count, fill: NAVY },
    { name: 'Trial Only (1-2 convos, no goals)', value: beyondPerfMgmt.trialOnly.count, fill: '#ccc' },
  ];
  return (<>
    <div className="card">
      <h1>65% Have Never Done a Goal Session — Nadia Is Already a General Coaching Tool</h1>
      <h2>Usage Beyond Performance Management</h2>
      <div className="chart-container" style={{display:'flex',justifyContent:'center'}}>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie data={donutData} innerRadius={70} outerRadius={120} paddingAngle={3} dataKey="value" label={({name, percent}) => `${name}: ${(percent*100).toFixed(0)}%`}>
              {donutData.map((d, i) => <Cell key={i} fill={d.fill} />)}
            </Pie>
            <Tooltip formatter={(v) => v.toLocaleString()} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-green">
        <strong>1,748 users</strong> (27% of total) have 3+ conversations with zero goal sessions — they're using Nadia for general coaching, skill development, and day-to-day leadership support.
      </div>
      <div className="narrative">
        This is perhaps the most important strategic finding: Nadia has organically expanded beyond its initial performance management mandate. At the same time, goal-setting remains the strongest activation mechanism — users who set goals average 11.0 conversations and have 0% churn.
      </div>
    </div>
  </>);
}

function Page14() {
  return (<>
    <div className="card">
      <h1>Communication Dominates — But Skill Profiles Differ by Role</h1>
      <h2>Skills Landscape</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={skillsExhibited} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="skill" type="category" width={160} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" fill={NAVY} radius={[0,4,4,0]} name="Times Exhibited" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h3>Skill Profiles by Population</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,marginTop:12}}>
        {[
          { title: 'Corporate Managers', data: skillsByPopulation.corporateManagers, count: '3,296' },
          { title: 'Frontline Leaders', data: skillsByPopulation.frontlineLeaders, count: '1,373' },
          { title: 'Scale ICs', data: skillsByPopulation.scaleICs, count: '1,350' },
        ].map((p, i) => (
          <div key={i} style={{background:'#f8f9fa',borderRadius:8,padding:16}}>
            <h3 style={{fontSize:13,marginBottom:8}}>{p.title} <span style={{fontWeight:400,color:'#888'}}>({p.count})</span></h3>
            <div style={{fontSize:11,marginBottom:8,color:GREEN,fontWeight:600}}>Exhibited:</div>
            <ul style={{fontSize:11,paddingLeft:16,lineHeight:1.8}}>{p.data.exhibited.map((s,j)=><li key={j}>{s}</li>)}</ul>
            <div style={{fontSize:11,marginTop:8,marginBottom:8,color:RED,fontWeight:600}}>Opportunity:</div>
            <ul style={{fontSize:11,paddingLeft:16,lineHeight:1.8}}>{p.data.opportunity.map((s,j)=><li key={j}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="narrative">
        The skill profiles are strikingly different. Corporate managers lead with strategic and leadership competencies. Frontline leaders emphasize accountability and people management. ICs focus on foundational professional skills. This validates personalized coaching — Nadia's ability to adapt to each user's skill profile is delivering differentiated value.
      </div>
    </div>
  </>);
}

function Page15() {
  return (<>
    <div className="card">
      <h1>Influencing Skills Is the #1 Organizational Gap</h1>
      <h2>Flagged 3.3x More as an Opportunity Than a Strength</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={skillGaps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" tick={{ fontSize: 10 }} angle={-25} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="exhibited" fill={GREEN} name="Exhibited" radius={[4,4,0,0]} />
            <Bar dataKey="opportunity" fill={RED} name="Opportunity" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-red">
        <strong>Influencing Skills gap ratio: 3.29x</strong> — flagged as a development area 553 times vs. exhibited as a strength only 168 times. This is overwhelmingly a manager-level gap.
      </div>
      <div className="narrative">
        A cluster of skills — Digital Fluency, Emotional Intelligence, Developing Others, and Adaptability — show gap ratios near 0.8x, meaning they're flagged as opportunities almost as frequently as strengths. These represent Delta's "emerging edge" development needs. Influencing Skills stands alone as the clearest capability gap in the data.
      </div>
    </div>
  </>);
}

function Page16() {
  return (<>
    <div className="card">
      <h1>Skill Development Needs Evolve with Seniority</h1>
      <h2>Top Skill Opportunities by Grade Band</h2>
      <table className="data-table">
        <thead><tr><th>Grade Band</th><th>#1</th><th>#2</th><th>#3</th><th>#4</th><th>#5</th></tr></thead>
        <tbody>
          {skillsByGradeBand.map((b, i) => (
            <tr key={i}>
              <td><strong>{b.band}</strong></td>
              {b.opp.map((s, j) => <td key={j} style={j === 0 ? {fontWeight: 600} : {}}>{s}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        Entry-level employees need foundational organizational and analytical skills. Mid-level adds digital fluency and strategic thinking. At the senior level, influencing skills emerge. By leadership and executive levels, influencing and developing others dominate. This progression can directly inform how Nadia coaches users at each career stage.
      </div>
    </div>
  </>);
}

function Page17() {
  return (<>
    <div className="card">
      <h1>9 Out of 10 Goals Lack Time Specificity</h1>
      <h2>Goal Quality Diagnostic</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={goalQuality} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} unit="%" />
            <YAxis dataKey="gap" type="category" width={180} tick={{ fontSize: 12 }} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="pct" fill={AMBER} radius={[0,4,4,0]} name="% of Users">
              {goalQuality.map((d, i) => <Cell key={i} fill={d.pct > 50 ? RED : AMBER} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="narrative">
        Among 2,023 users whose goals Nadia analyzed, the overwhelming pattern is goals without clear timelines (90%) and not measurable (62%). This is actionable intelligence for L&D — goal-setting workshops should emphasize SMART frameworks, especially time-specificity and measurability. Nadia is functioning as a diagnostic tool, not just a coaching tool.
      </div>
    </div>
  </>);
}

function Page18() {
  return (<>
    <div className="card">
      <h1>Goal Barriers Vary by BU — Pointing to Targeted Interventions</h1>
      <h2>Resource Constraints Are #1 — But Each BU Has a Unique Challenge</h2>
      <table className="data-table">
        <thead><tr><th>Business Unit</th><th>#1 Barrier</th><th>#2 Barrier</th></tr></thead>
        <tbody>
          {goalBarriersByBu.map((b, i) => (
            <tr key={i}><td><strong>{b.bu}</strong></td><td>{b.b1}</td><td>{b.b2}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="narrative">
        Resource and capacity constraints dominate across most BUs. But IT uniquely cites knowledge/skill gaps as their top barrier, pointing to a learning investment opportunity. HR flags organizational structure — possibly reflecting matrix complexity. These insights give HRBP teams a data-driven starting point for targeted interventions.
      </div>
    </div>
  </>);
}

function Page19() {
  return (<>
    <div className="card">
      <h1>Targeted Cohorts Show What's Possible</h1>
      <h2>DLA Participants Average 32 Conversations</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={targetedCohorts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cohort" tick={{ fontSize: 10 }} angle={-20} textAnchor="end" height={70} />
            <YAxis yAxisId="left" label={{ value: 'Adoption %', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Avg Convos', angle: 90, position: 'insideRight', style: { fontSize: 11 } }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="rate" fill={NAVY} name="Adoption %" radius={[4,4,0,0]} />
            <Line yAxisId="right" type="monotone" dataKey="avgConvos" stroke={RED} strokeWidth={2} dot={{ r: 4 }} name="Avg Conversations" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="callout callout-green">
        <strong>DLA participants: 91% adoption, 32.0 avg conversations</strong> — 4.8x the general merit average. This is what intentional program design looks like.
      </div>
      <div className="narrative">
        Targeted cohort programs dramatically outperform general merit adoption. GTM participants are at 98% adoption. These programs combine structured talent processes with intentional Nadia integration, creating accountability and context that drives sustained usage. This is the playbook for scaling — don't just launch broadly, embed in specific programs.
      </div>
    </div>
  </>);
}

function Page20() {
  return (<>
    <div className="card">
      <h1>The Activation Formula</h1>
      <h2>What Differentiates High-Engagement Users from Low-Engagement Users</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={activationFormula}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dimension" tick={{ fontSize: 11 }} />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" fill={GREEN} name="High Engagement (10+ convos)" radius={[4,4,0,0]} />
            <Bar dataKey="low" fill={RED} name="Low Engagement (1-2 convos)" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="data-table">
        <thead><tr><th>Dimension</th><th>High (10+)</th><th>Low (1-2)</th><th>Gap</th></tr></thead>
        <tbody>
          {activationFormula.map((a, i) => (
            <tr key={i}><td><strong>{a.dimension}</strong></td><td>{a.high}%</td><td>{a.low}%</td>
              <td style={{color: a.high - a.low > 20 ? RED : '#333', fontWeight: 600}}>+{a.high - a.low} pts</td>
            </tr>
          ))}
          <tr className="highlight"><td><strong>Avg Goal Sessions</strong></td><td>0.9</td><td>0.2</td><td style={{color:RED,fontWeight:600}}>+350%</td></tr>
        </tbody>
      </table>
      <div className="narrative">
        Integration connectivity is the strongest differentiator — far more than role or level. Driving Teams and Calendar connection during onboarding could be the single highest-ROI intervention. Goal-setting completion is the second lever, with high-engagement users 4.5x more likely to have completed a goal session.
      </div>
    </div>
  </>);
}

function Page21() {
  return (<>
    <div className="card">
      <h1>HiPo Adoption Is Strong — But Engagement Mirrors the Broader Pattern</h1>
      <h2>HiPo Executive Coaching Cohort</h2>
      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-value">520</div><div className="kpi-label">HiPo in Merit</div></div>
        <div className="kpi"><div className="kpi-value">316</div><div className="kpi-label">HiPo in Nadia</div><div className="kpi-sub">60.8% adoption (1.5x overall)</div></div>
        <div className="kpi"><div className="kpi-value">8.0</div><div className="kpi-label">Avg Conversations</div><div className="kpi-sub">On par with overall avg</div></div>
      </div>
      <div className="narrative">
        HiPos adopt at a higher rate (60.8% vs 43.6% overall) but don't engage more deeply — 8.0 avg conversations is on par with the broader population. 38% remain in Trial/Light tiers. This cohort should be Delta's most development-oriented population — there's room to deepen their coaching relationship with Nadia through more structured programming.
      </div>
    </div>
  </>);
}

function Page22() {
  return (<>
    <div className="card">
      <h1>Five Plays to Drive the Next Wave of Adoption</h1>
      <h2>Strategic Recommendations</h2>
      <div className="rec-grid">
        <div className="rec-card">
          <h4>1. Activate the Middle</h4>
          <div className="rec-stat">3,089 Trial Users</div>
          <p>Post-first-conversation nudge campaign. Prompt integration setup. Surface a coaching insight that pulls them back. <strong>Goal:</strong> Move Trial from 48.5% to &lt;35%.</p>
          <div className="callout" style={{marginTop:8,fontSize:11}}>76% of churned users never got past conversation #2</div>
        </div>
        <div className="rec-card">
          <h4>2. Drive Integration Adoption</h4>
          <div className="rec-stat">2.3x Multiplier</div>
          <p>Make integration setup part of onboarding. BU-level integration challenges. <strong>Goal:</strong> Teams 41%→60%, Calendar 25%→40%.</p>
          <div className="callout callout-green" style={{marginTop:8,fontSize:11}}>Both integrations = 12.2 avg convos vs 5.3</div>
        </div>
        <div className="rec-card">
          <h4>3. Unlock Frontline Connect</h4>
          <div className="rec-stat">4.4% → 20%</div>
          <p>Partner with ACS, Inflight, Reservations leaders to embed Connect in existing 1:1 cadences. Create FLL-specific onboarding.</p>
          <div className="callout" style={{marginTop:8,fontSize:11}}>Connect users: 31.1 avg convos vs 9.3 without</div>
        </div>
        <div className="rec-card">
          <h4>4. Crack the Big 3 BUs</h4>
          <div className="rec-stat">4,900 Employees</div>
          <p>TechOps (31%), IT (34%), Finance (38%). Identify BU champions, tailor use cases, partner with HRBPs. <strong>Goal:</strong> Move to 50% adoption.</p>
          <div className="callout callout-red" style={{marginTop:8,fontSize:11}}>These 3 BUs = 30% of merit population</div>
        </div>
        <div className="rec-card full-width">
          <h4>5. Close the Influencing Skills Gap</h4>
          <div className="rec-stat">3.3x Gap Ratio</div>
          <p>Develop Nadia coaching flows specifically for Influencing Skills — the #1 gap identified in the data. Create targeted development nudges for all manager-level users. <strong>Goal:</strong> Reduce gap ratio from 3.3x to &lt;2.0x.</p>
        </div>
      </div>
    </div>
  </>);
}

// ─── PAGE REGISTRY ──────────────────────────────────────

const pages = [
  { id: 1, title: 'Executive Summary', section: 'Overview', component: Page1 },
  { id: 2, title: 'Growth Timeline', section: 'Overview', component: Page2 },
  { id: 3, title: 'Engagement Depth', section: 'Engagement', component: Page3 },
  { id: 4, title: 'Integration Effect', section: 'Engagement', component: Page4 },
  { id: 5, title: 'Retention & Churn', section: 'Engagement', component: Page5 },
  { id: 6, title: 'BU Adoption Table', section: 'Where It\'s Working', component: Page6 },
  { id: 7, title: 'BU Quality Matrix', section: 'Where It\'s Working', component: Page7 },
  { id: 8, title: 'Grade Level Analysis', section: 'Where It\'s Working', component: Page8 },
  { id: 9, title: 'Career Level Deep Dive', section: 'Where It\'s Working', component: Page9 },
  { id: 10, title: 'Sub-Family Spotlight', section: 'Where It\'s Working', component: Page10 },
  { id: 11, title: 'Station / Location', section: 'Where It\'s Working', component: Page11 },
  { id: 12, title: 'Frontline Leaders', section: 'Frontline & Connect', component: Page12 },
  { id: 13, title: 'Beyond Perf Mgmt', section: 'Frontline & Connect', component: Page13 },
  { id: 14, title: 'Skills Landscape', section: 'Skills & Development', component: Page14 },
  { id: 15, title: 'Influencing Skills Gap', section: 'Skills & Development', component: Page15 },
  { id: 16, title: 'Skills by Grade Band', section: 'Skills & Development', component: Page16 },
  { id: 17, title: 'Goal Quality', section: 'Goals & Barriers', component: Page17 },
  { id: 18, title: 'Goal Barriers by BU', section: 'Goals & Barriers', component: Page18 },
  { id: 19, title: 'Targeted Cohorts', section: 'Programs', component: Page19 },
  { id: 20, title: 'Activation Formula', section: 'Programs', component: Page20 },
  { id: 21, title: 'HiPo Cohort', section: 'Programs', component: Page21 },
  { id: 22, title: 'Recommendations', section: 'Recommendations', component: Page22 },
];

// ─── APP ────────────────────────────────────────────────

// ─── PASSWORD GATE ──────────────────────────────────────

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Delta_Valence2026') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #9A31AF, #0009B4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: 48,
        maxWidth: 440,
        width: '100%',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Crimson Pro', Georgia, serif",
          fontSize: 32,
          fontWeight: 300,
          color: '#393939',
          marginBottom: 8,
        }}>Nadia at Delta</h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          color: '#9A9A9A',
          marginBottom: 32,
          fontWeight: 300,
        }}>AI Coaching Analytics Dashboard</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `1px solid ${error ? '#FF2891' : '#DFDFDF'}`,
              borderRadius: 8,
              fontSize: 16,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              color: '#393939',
              outline: 'none',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => { if (!error) e.target.style.borderColor = '#003FDC'; }}
            onBlur={(e) => { if (!error) e.target.style.borderColor = '#DFDFDF'; }}
          />
          {error && (
            <p style={{ color: '#FF2891', fontSize: 13, marginTop: 8, fontWeight: 400 }}>
              Incorrect password. Please try again.
            </p>
          )}
          <button type="submit" style={{
            marginTop: 16,
            width: '100%',
            padding: '12px 32px',
            background: '#003FDC',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
            onMouseEnter={(e) => e.target.style.background = '#0009B4'}
            onMouseLeave={(e) => e.target.style.background = '#003FDC'}
          >
            Enter Dashboard
          </button>
        </form>
        <p style={{
          marginTop: 24,
          fontSize: 11,
          color: '#9A9A9A',
          fontWeight: 300,
        }}>Confidential — Valence & Delta Air Lines</p>
      </div>
    </div>
  );
}

// ─── APP ────────────────────────────────────────────────

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PageComponent = pages[currentPage].component;

  const sections = [...new Set(pages.map(p => p.section))];

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="sidebar-logo">
          <h2>Nadia at Delta</h2>
          <p>AI Coaching Analytics — March 2026</p>
        </div>
        {sections.map(section => (
          <div key={section}>
            <div className="nav-section">{section}</div>
            {pages.filter(p => p.section === section).map(p => (
              <div key={p.id}
                className={`nav-item ${currentPage === p.id - 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(p.id - 1)}>
                {p.id}. {p.title}
              </div>
            ))}
          </div>
        ))}
      </nav>
      <main className="main">
        <div className="page-nav">
          <button disabled={currentPage === 0} onClick={() => setCurrentPage(p => p - 1)}>← Previous</button>
          <span className="page-counter">Page {currentPage + 1} of {pages.length}</span>
          <button disabled={currentPage === pages.length - 1} onClick={() => setCurrentPage(p => p + 1)}>Next →</button>
        </div>
        <PageComponent />
        <div className="page-nav" style={{marginTop: 8}}>
          <button disabled={currentPage === 0} onClick={() => setCurrentPage(p => p - 1)}>← Previous</button>
          <span className="page-counter">Page {currentPage + 1} of {pages.length}</span>
          <button disabled={currentPage === pages.length - 1} onClick={() => setCurrentPage(p => p + 1)}>Next →</button>
        </div>
      </main>
    </div>
  );
}
