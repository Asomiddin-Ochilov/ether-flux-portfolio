// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/settings")({ component: Settings });

function Settings() {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
      <div className="lp-panel">
        <h3>Profile</h3>
        <div className="lp-field" style={{marginBottom:14}}><label>Display name</label><input defaultValue="Nova"/></div>
        <div className="lp-field" style={{marginBottom:14}}><label>Email</label><input defaultValue="hello@nova.dev"/></div>
        <div className="lp-field" style={{marginBottom:18}}><label>Bio</label><textarea rows={4} defaultValue="Independent design engineer."/></div>
        <button className="lp-btn lp-btn-primary">Save changes</button>
      </div>
      <div className="lp-panel">
        <h3>Theme</h3>
        <p style={{color:"var(--txt-mut)",fontSize:14}}>Dark futuristic is the only acceptable theme.</p>
        <div style={{display:"flex",gap:10,marginTop:14}}>
          <div style={{width:50,height:50,borderRadius:14,background:"var(--grad-pp)",boxShadow:"var(--shadow-neon)"}}/>
          <div style={{width:50,height:50,borderRadius:14,background:"var(--bg-1)",border:"1px solid var(--stroke-2)"}}/>
          <div style={{width:50,height:50,borderRadius:14,background:"var(--gl-2)"}}/>
        </div>
      </div>
    </div>
  );
}
