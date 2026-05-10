// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { HiOutlineUsers, HiOutlineEye, HiOutlineCash, HiOutlineSparkles } from "react-icons/hi";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const stats = [
  { lb:"Total Visits", vl:"48,290", ch:"+12.4% this week", ic:<HiOutlineEye/> },
  { lb:"New Messages", vl:"126",    ch:"+8 today",          ic:<HiOutlineUsers/> },
  { lb:"Project Inquiries", vl:"34", ch:"3 high priority",   ic:<HiOutlineSparkles/> },
  { lb:"Revenue (MTD)", vl:"$28.4k", ch:"+22% vs last mo.",  ic:<HiOutlineCash/> },
];

const bars = [40,65,52,78,90,72,85,95,68,80,92,100];

function Dashboard() {
  return (
    <>
      <div className="lp-admin-cards">
        {stats.map((s,i)=>(
          <div key={i} className="lp-admin-card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div className="lb">{s.lb}</div>
              <div style={{width:36,height:36,borderRadius:10,background:"rgba(168,85,247,.15)",border:"1px solid var(--stroke-2)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--gl-2)"}}>{s.ic}</div>
            </div>
            <div className="vl">{s.vl}</div>
            <div className="ch">{s.ch}</div>
          </div>
        ))}
      </div>

      <div className="lp-admin-grid">
        <div className="lp-panel">
          <h3>Traffic — last 12 weeks</h3>
          <div className="lp-chart">
            {bars.map((h,i)=> <div key={i} className="bar" style={{height:`${h}%`}}/>)}
          </div>
        </div>
        <div className="lp-panel">
          <h3>Recent Messages</h3>
          <table className="lp-table">
            <thead><tr><th>Name</th><th>Project</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Aria Chen</td><td>SaaS redesign</td><td><span className="lp-pill ok">Replied</span></td></tr>
              <tr><td>Marcus Doyle</td><td>Mobile app</td><td><span className="lp-pill pen">Pending</span></td></tr>
              <tr><td>Sofia Reyes</td><td>Brand site</td><td><span className="lp-pill ok">Replied</span></td></tr>
              <tr><td>Daniel Park</td><td>AI dashboard</td><td><span className="lp-pill pen">Pending</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="lp-panel" style={{marginTop:18}}>
        <h3>Latest Projects</h3>
        <table className="lp-table">
          <thead><tr><th>Title</th><th>Category</th><th>Updated</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Atlas Analytics</td><td>Dashboard</td><td>2h ago</td><td><span className="lp-pill ok">Published</span></td></tr>
            <tr><td>Lumen Wallet</td><td>Mobile UI</td><td>1d ago</td><td><span className="lp-pill ok">Published</span></td></tr>
            <tr><td>Neuron OS</td><td>AI</td><td>3d ago</td><td><span className="lp-pill pen">Draft</span></td></tr>
            <tr><td>Helix CRM</td><td>CRM</td><td>1w ago</td><td><span className="lp-pill ok">Published</span></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
