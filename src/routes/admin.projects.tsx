// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
export const Route = createFileRoute("/admin/projects")({ component: ProjectsAdmin });

const initialProjects = [
  { id:1, title:"Atlas Analytics", createDate:"2024-01-15", status:"Published", description:"Dashboard analytics platform", imageUrl:"dfdf", githubRepo:"", demoLink:"" },
  { id:2, title:"Lumen Wallet", createDate:"2024-02-20", status:"Published", description:"Mobile crypto wallet", imageUrl:"", githubRepo:"", demoLink:"" },
  { id:3, title:"Neuron OS", createDate:"2024-03-10", status:"Draft", description:"AI operating system", imageUrl:"", githubRepo:"", demoLink:"" },
];

function ProjectsAdmin() {
  const [projects, setProjects] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    createDate: "",
    status: "Draft",
    description: "",
    imageUrl: "",
    githubRepo: "",
    demoLink: "",
  });

  const handleOpenModal = (project = null) => {
    if (project) {
      setEditingId(project.id);
      setFormData(project);
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        createDate: new Date().toISOString().split("T")[0],
        status: "Draft",
        description: "",
        imageUrl: "",
        githubRepo: "",
        demoLink: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingId(null);
  };

  const handleSaveProject = () => {
    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingId) {
      setProjects(projects.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
    } else {
      setProjects([...projects, { ...formData, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="lp-panel">
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:18,alignItems:"center"}}>
        <h3 style={{margin:0}}>All Projects</h3>
        <button className="lp-btn lp-btn-primary" onClick={() => handleOpenModal()}><HiOutlinePlus/> New Project</button>
      </div>
      <table className="lp-table">
        <thead><tr><th>Title</th><th>Create Date</th><th>Status</th><th>Description</th><th>Image URL</th><th>GitHub Repo</th><th>Demo Link</th><th style={{textAlign:"right"}}>Actions</th></tr></thead>
        <tbody>
          {projects.map((p)=>(
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.createDate}</td>
              <td><span className={`lp-pill ${p.status==="Published"?"ok":"pen"}`}>{p.status}</span></td>
              <td style={{maxWidth:"150px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{p.description}</td>
              <td style={{maxWidth:"100px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{p.imageUrl || "-"}</td>
              <td style={{maxWidth:"100px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{p.githubRepo ? <a href={p.githubRepo} target="_blank" rel="noopener noreferrer" style={{color:"var(--gl-2)"}}>Link</a> : "-"}</td>
              <td style={{maxWidth:"100px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{p.demoLink ? <a href={p.demoLink} target="_blank" rel="noopener noreferrer" style={{color:"var(--gl-2)"}}>Link</a> : "-"}</td>
              <td style={{textAlign:"right"}}>
                <button className="lp-btn lp-btn-ghost" style={{padding:"8px 12px",marginRight:6}} onClick={() => handleOpenModal(p)}><HiOutlinePencil/></button>
                <button className="lp-btn lp-btn-ghost" style={{padding:"8px 12px"}} onClick={() => setDeleteId(p.id)}><HiOutlineTrash/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      {showModal && (
        <div style={{maxWidth:"960px",width:"100%",maxHeight:"calc(100vh)",position:"fixed",top:'10%',left:0,right:'10%',bottom:0,background:"rgba(0, 0, 0, 0.05)",backdropFilter:"blur(1px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:20}}>
          <div style={{background:"#0f172a",border:"1px solid rgba(255,255,255,0.12)",borderRadius:24,padding:32,maxWidth:"860px",width:"100%",maxHeight:"calc(95vh - 80px)",overflow:"hidden",boxShadow:"0 30px 90px rgba(0,0,0,0.35)",boxSizing:"border-box"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
              <h2 style={{margin:0,color:"#fff"}}>{editingId ? "Edit Project" : "New Project"}</h2>
              <button onClick={handleCloseModal} style={{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"#fff"}}><HiOutlineX/></button>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:16}}>
              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Title *</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Project title" style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}} />
              </div>

              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Date</label>
                <input type="date" value={formData.createDate} onChange={(e) => setFormData({...formData, createDate: e.target.value})} style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}} />
              </div>

              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Status</label>
                <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}}>
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Image URL</label>
                <input type="url" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} placeholder="https://..." style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}} />
              </div>

              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>GitHub Repo</label>
                <input type="url" value={formData.githubRepo} onChange={(e) => setFormData({...formData, githubRepo: e.target.value})} placeholder="https://github.com/..." style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}} />
              </div>

              <div>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Demo Link</label>
                <input type="url" value={formData.demoLink} onChange={(e) => setFormData({...formData, demoLink: e.target.value})} placeholder="https://..." style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff"}} />
              </div>

              <div style={{gridColumn:"1 / -1"}}>
                <label style={{display:"block",marginBottom:8,fontWeight:600,color:"#fff"}}>Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Project description" style={{width:"100%",padding:"12px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,background:"rgba(255,255,255,0.05)",color:"#fff",minHeight:"120px"}} />
              </div>
            </div>

            <div style={{display:"flex",gap:12,justifyContent:"flex-end",marginTop:22}}>
              <button onClick={handleCloseModal} className="lp-btn lp-btn-ghost">Cancel</button>
              <button onClick={handleSaveProject} className="lp-btn lp-btn-primary">Save Project</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000}}>
          <div style={{background:"#0e0329",borderRadius:12,padding:24,maxWidth:"400px",width:"100%"}}>
            <h2 style={{margin:"0 0 12px 0"}}>Delete Project?</h2>
            <p style={{margin:"0 0 18px 0",color:"var(--txt-mut)"}}>Are you sure you want to delete this project? This action cannot be undone.</p>
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button onClick={() => setDeleteId(null)} className="lp-btn lp-btn-ghost">Cancel</button>
              <button onClick={() => handleDeleteProject(deleteId)} className="lp-btn lp-btn-primary" style={{background:"#fa5252"}}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
