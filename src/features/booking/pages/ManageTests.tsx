import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, ShieldAlert, FlaskConical, CheckCircle2, X } from 'lucide-react';

const ManageTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Core Diagnostic Tests Array State for Admin CRUD operations
  const [testsList, setTestsList] = useState([
    { id: "TST-001", name: "Lipid Profile Premium Panel", price: "799", reportTime: "24 Hours", status: "Active", category: "Biochemistry" },
    { id: "TST-002", name: "Complete Blood Count (CBC)", price: "499", reportTime: "12 Hours", status: "Active", category: "Hematology" },
    { id: "TST-003", name: "HbA1c / Glycated Haemoglobin", price: "399", reportTime: "24 Hours", status: "Active", category: "Diabetology" },
    { id: "TST-004", name: "Liver Function Test (LFT)", price: "699", reportTime: "24 Hours", status: "Active", category: "Biochemistry" }
  ]);

  // Form State for capturing new diagnostic metadata
  const [newTest, setNewTest] = useState({
    name: '',
    price: '',
    reportTime: '24 Hours',
    category: 'Biochemistry',
    status: 'Active'
  });

  const handleAddTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `TST-00${testsList.length + 1}`;
    setTestsList([...testsList, { id: generatedId, ...newTest }]);
    setNewTest({ name: '', price: '', reportTime: '24 Hours', category: 'Biochemistry', status: 'Active' });
    setShowAddModal(false);
    alert("New pathology assay template compiled inside internal registry!");
  };

  const handleDeleteTest = (id: string) => {
    if (window.confirm("Are you absolutely sure you want to remove this diagnostic panel profile context?")) {
      setTestsList(testsList.filter(t => t.id !== id));
    }
  };

  const filteredTests = testsList.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#f4faf7]/60 pt-28 pb-16 md:pb-24 text-left font-sans select-none relative">
      <div className="w-full h-[1px] bg-gray-200 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        
        {/* Module Header Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-gray-200 p-6 rounded-3xl shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#0f8a73]">
              <FlaskConical size={22} />
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Manage Pathology Catalog</h2>
            </div>
            <p className="text-xs text-gray-400 font-bold">Configure active medical tests, adjust pricing metrics, and audit live catalog listings.</p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 bg-[#0f8a73] hover:bg-[#0c7561] text-white font-black text-xs px-5 py-3 rounded-xl transition shadow-md shadow-teal-100 cursor-pointer self-start sm:self-auto"
          >
            <Plus size={16} /> Add New Medical Test
          </button>
        </div>

        {/* Database Table Container Workspace */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
          
          {/* Table Filters Utility Row */}
          <div className="flex items-center max-w-md w-full relative">
            <Search size={14} className="absolute left-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search active catalog by name, code ID, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl font-medium text-[11px] text-gray-900 bg-white focus:outline-[#0f8a73] transition-all"
            />
          </div>

          {/* Core Layout Data Table */}
          <div className="w-full overflow-x-auto border border-gray-100 rounded-2xl bg-slate-50/20">
            <table className="w-full text-left text-xs font-bold text-gray-600 border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-100 text-gray-400 text-[10px] uppercase tracking-wider font-black">
                  <th className="p-4">Test Code ID</th>
                  <th className="p-4">Test Description Parameters</th>
                  <th className="p-4">Department Category</th>
                  <th className="p-4">Report Delivery (TAT)</th>
                  <th className="p-4">Base Pricing</th>
                  <th className="p-4 text-center">Operational Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/70 bg-white">
                {filteredTests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-400 font-bold">No registered diagnostic arrays found matching active catalog filter.</td>
                  </tr>
                ) : (
                  filteredTests.map((test) => (
                    <tr key={test.id} className="hover:bg-slate-50/50 transition">
                      <td className="p-4 font-mono text-[10px] text-gray-400 font-medium">{test.id}</td>
                      <td className="p-4 text-gray-900 font-extrabold text-sm tracking-tight">{test.name}</td>
                      <td className="p-4 font-semibold text-gray-600">
                        <span className="bg-slate-100/80 px-2 py-0.5 rounded text-[11px] text-slate-700">{test.category}</span>
                      </td>
                      <td className="p-4 font-semibold text-gray-500">{test.reportTime}</td>
                      <td className="p-4 text-gray-900 font-black text-sm">₹{test.price}.00</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => alert(`Opening update interface flow for configuration template: ${test.id}`)} className="text-gray-400 hover:text-[#0f8a73] transition cursor-pointer p-1.5" title="Edit template parameters">
                            <Edit2 size={14} />
                          </button>
                          <button onClick={() => handleDeleteTest(test.id)} className="text-gray-400 hover:text-red-500 transition cursor-pointer p-1.5" title="Delete from catalog list">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            DYNAMIC POPUP FORM MODAL CONTAINER: TRIGGERS ON CLICKING ADD BUTTON
        ========================================================================= */}
        {showAddModal && (
          <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 text-left relative space-y-5">
              <button onClick={() => setShowAddModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                <X size={18} />
              </button>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Compile New Test Panel</h3>
                <p className="text-[11px] text-gray-400 font-bold">Inject fresh diagnostic biomarkers specifications data matrices cleanly inside database systems.</p>
              </div>

              <form onSubmit={handleAddTestSubmit} className="space-y-4 text-xs font-bold text-gray-700">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wide">Test Profile Full Name</label>
                  <input type="text" required placeholder="e.g. Thyroid Profile Total (T3, T4, TSH)" value={newTest.name} onChange={(e) => setNewTest({...newTest, name: e.target.value})} className="p-3 border border-gray-200 rounded-xl text-gray-900 font-semibold focus:outline-[#0f8a73] text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wide">Base Price (INR)</label>
                    <input type="number" required placeholder="e.g. 450" value={newTest.price} onChange={(e) => setNewTest({...newTest, price: e.target.value})} className="p-3 border border-gray-200 rounded-xl text-gray-900 font-semibold focus:outline-[#0f8a73] text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wide">Report TAT Window</label>
                    <select value={newTest.reportTime} onChange={(e) => setNewTest({...newTest, reportTime: e.target.value})} className="p-3 border border-gray-200 rounded-xl text-gray-900 font-semibold focus:outline-[#0f8a73] text-sm cursor-pointer">
                      <option value="12 Hours">12 Hours</option>
                      <option value="24 Hours">24 Hours</option>
                      <option value="48 Hours">48 Hours</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wide">Laboratory Division Category</label>
                  <select value={newTest.category} onChange={(e) => setNewTest({...newTest, category: e.target.value})} className="p-3 border border-gray-200 rounded-xl text-gray-900 font-semibold focus:outline-[#0f8a73] text-sm cursor-pointer">
                    <option value="Biochemistry">Biochemistry</option>
                    <option value="Hematology">Hematology</option>
                    <option value="Diabetology">Diabetology</option>
                    <option value="Serology">Serology</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#0f8a73] hover:bg-[#0c7561] text-white font-black text-sm py-3.5 rounded-xl transition shadow-sm mt-2 cursor-pointer">
                  Publish Pathological Profile
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ManageTests;