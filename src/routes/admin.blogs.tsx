// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineX } from "react-icons/hi";

export const Route = createFileRoute("/admin/blogs")({ component: BlogsAdmin });

const initialRows = [
  { image: "", id: 1, title: "Building a 60fps motion language", category: "Engineering", published: "May 02, 2026", content: "Short article about motion design..." },
  { image: "", id: 2, title: "Glassmorphism in 2026", category: "Design", published: "Apr 18, 2026", content: "A modern UI trend article..." },
  { image: "", id: 3, title: "Designing for agents", category: "AI", published: "Apr 04, 2026", content: "How to design interfaces for AI agents..." },
];

function BlogsAdmin() {
  const [rows, setRows] = useState(initialRows);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "Engineering",
    published: "",
    content: "",
  });

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingId(item.id);
      setFormData({
        image: item.image || "",
        title: item.title || "",
        category: item.category || "Engineering",
        published: item.published || "",
        content: item.content || "",
      });
    } else {
      setEditingId(null);
      setFormData({
        image: "",
        title: "",
        category: "Engineering",
        published: new Date().toISOString().split("T")[0],
        content: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingId(null);
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingId) {
      setRows(rows.map((r) => (r.id === editingId ? { ...formData, id: editingId } : r)));
    } else {
      setRows([...rows, { ...formData, id: Date.now() }]);
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    setRows(rows.filter((r) => r.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="lp-panel">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18, alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>All Articles</h3>
        <button className="lp-btn lp-btn-primary" onClick={() => handleOpenModal()}>
          <HiOutlinePlus /> New Article
        </button>
      </div>

      <table className="lp-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Published</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.image ? <a href={r.image} target="_blank" rel="noreferrer">Link</a> : "-"}</td>
              <td>{r.title}</td>
              <td>{r.category}</td>
              <td>{r.published}</td>
              <td style={{ textAlign: "right" }}>
                <button
                  className="lp-btn lp-btn-ghost"
                  style={{ padding: "8px 12px", marginRight: 6 }}
                  onClick={() => handleOpenModal(r)}
                >
                  <HiOutlinePencil />
                </button>
                <button
                  className="lp-btn lp-btn-ghost"
                  style={{ padding: "8px 12px" }}
                  onClick={() => setDeleteId(r.id)}
                >
                  <HiOutlineTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: 32,
              maxWidth: "860px",
              width: "100%",
              maxHeight: "calc(95vh - 40px)",
              overflowY: "auto",
              boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <h2 style={{ margin: 0, color: "#fff" }}>{editingId ? "Edit Article" : "New Article"}</h2>
              <button
                onClick={handleCloseModal}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, color: "#fff" }}
              >
                <HiOutlineX />
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, color: "#fff" }}>Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, color: "#fff" }}>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Article title"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, color: "#fff" }}>Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                  }}
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="AI">AI</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, color: "#fff" }}>Published</label>
                <input
                  type="text"
                  value={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.value })}
                  placeholder="May 02, 2026"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                  }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, color: "#fff" }}>Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write article content..."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    minHeight: "140px",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 22 }}>
              <button onClick={handleCloseModal} className="lp-btn lp-btn-ghost">
                Cancel
              </button>
              <button onClick={handleSave} className="lp-btn lp-btn-primary">
                Save Article
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        >
          <div style={{ background: "#0e0329", borderRadius: 12, padding: 24, maxWidth: "400px", width: "100%" }}>
            <h2 style={{ margin: "0 0 12px 0" }}>Delete Article?</h2>
            <p style={{ margin: "0 0 18px 0", color: "var(--txt-mut)" }}>
              Are you sure you want to delete this article? This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setDeleteId(null)} className="lp-btn lp-btn-ghost">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteId)} className="lp-btn lp-btn-primary" style={{ background: "#fa5252" }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}