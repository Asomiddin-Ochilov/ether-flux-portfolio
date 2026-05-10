// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/messages")({ component: Messages });

const msgs = [
  { n:"Aria Chen", e:"aria@nimbus.com", s:"SaaS redesign inquiry", t:"2h ago", st:"new" },
  { n:"Marcus Doyle", e:"marcus@linear.app", s:"Motion consult", t:"5h ago", st:"replied" },
  { n:"Sofia Reyes", e:"sofia@loop.ai", s:"Brand site rebuild", t:"1d ago", st:"new" },
  { n:"Daniel Park", e:"daniel@stripe.com", s:"Internal AI dashboard", t:"3d ago", st:"replied" },
];

function Messages() {
  return (
    <div className="lp-panel">
      <h3>Inbox</h3>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{padding:18,borderRadius:16,background:"var(--glass)",border:"1px solid var(--stroke)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:14}}>
            <div style={{display:"flex",gap:14,alignItems:"center"}}>
              <div style={{width:42,height:42,borderRadius:12,background:"var(--grad-pp)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600}}>{m.n[0]}</div>
              <div>
                <div style={{fontWeight:500}}>{m.n} <span style={{color:"var(--txt-mut)",fontSize:13,marginLeft:6}}>· {m.e}</span></div>
                <div style={{color:"var(--txt-mut)",fontSize:14,marginTop:2}}>{m.s}</div>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <span className={`lp-pill ${m.st==="new"?"pen":"ok"}`}>{m.st}</span>
              <span style={{color:"var(--txt-mut)",fontSize:13}}>{m.t}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
