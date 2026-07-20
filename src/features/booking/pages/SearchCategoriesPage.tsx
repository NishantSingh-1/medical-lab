import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Grid, FlaskConical, Activity, ShieldCheck, ArrowRight, ShoppingCart } from 'lucide-react';

// Structured Catalogue Data directly simulated from PDF Module 01 specifications
const catalogueData = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    code: "TST-CBC-001",
    category: "Haematology",
    price: 395,
    marketPrice: 527,
    discount: "25% off",
    tat: "6 Hours",
  },
  {
    id: "lipid",
    name: "Lipid Profile Premium Panel",
    code: "LPD-112",
    category: "Biochemistry",
    price: 799,
    marketPrice: 1499,
    discount: "46% off",
    tat: "24 Hours",
  },
  {
    id: "hba1c",
    name: "HbA1c, Glycated Haemoglobin",
    code: "TST-HBA-004",
    category: "Biochemistry",
    price: 610,
    marketPrice: 813,
    discount: "25% off",
    tat: "6 Hours",
  },
  {
    id: "kft",
    name: "Kidney Function Test (KFT)",
    code: "TST-KFT-009",
    category: "Biochemistry",
    price: 750,
    marketPrice: 1000,
    discount: "25% off",
    tat: "8 Hours",
  },
  {
    id: "lft",
    name: "Liver Function Test (LFT)",
    code: "TST-LFT-012",
    category: "Biochemistry",
    price: 800,
    marketPrice: 1067,
    discount: "25% off",
    tat: "8 Hours",
  },
  {
    id: "xray-chest",
    name: "Digital Chest X-Ray (PA View)",
    code: "RAD-XR-023",
    category: "Radiology",
    price: 550,
    marketPrice: 750,
    discount: "26% off",
    tat: "12 Hours",
  }
];

const SearchCategoriesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartTracker, setCartTracker] = useState<{ [key: string]: boolean }>({});

  // Category array definitions
  const categories = ['All', 'Biochemistry', 'Haematology', 'Radiology'];

  // Toggle internal cart simulation states
  const toggleCartAction = (id: string) => {
    setCartTracker(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter pipeline execution based on query and selected category tab
  const filteredTests = catalogueData.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          test.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#f4faf7]/60 pt-40 pb-16 md:pb-24 text-left font-sans select-none relative">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        
        {/* TOP INTERACTIVE CONTROLS CONTAINER */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#2d3142] tracking-tight">
              Test Catalogue Explorer
            </h1>
            <p className="text-xs text-gray-500 font-bold mt-1">
              Search parameters across biochemical, haematology and diagnostic fields instantly.
            </p>
          </div>

          {/* REAL TIME INPUT SEARCH BAR CONTAINER */}
          <div className="relative flex items-center w-full">
            <Search className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />
            <input 
              type="text"
              placeholder="Search by test name, biomarkers, symptoms or code parameters (e.g. CBC, Lipid)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-gray-200 focus:border-[#0f8a73] rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-900 font-semibold outline-none transition-all"
            />
          </div>

          {/* DYNAMIC CATEGORY FILTER BUTTONS ROW */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-black rounded-xl transition duration-150 cursor-pointer border outline-none ${
                  selectedCategory === category 
                    ? 'bg-[#0f8a73] text-white border-[#0f8a73] shadow-sm' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#0f8a73]/40 hover:text-[#0f8a73]'
                }`}
              >
                {category === 'All' && <span className="flex items-center gap-1.5"><Grid size={14} /> All Divisions</span>}
                {category === 'Biochemistry' && <span className="flex items-center gap-1.5"><Activity size={14} /> Biochemistry</span>}
                {category === 'Haematology' && <span className="flex items-center gap-1.5"><FlaskConical size={14} /> Haematology</span>}
                {category === 'Radiology' && <span className="flex items-center gap-1.5"><Search size={14} /> Radiology</span>}
              </button>
            ))}
          </div>
        </div>

        {/* COMPONENT OUTPUT LISTING GRID */}
        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {filteredTests.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-3xl border border-[#008080] p-5 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.01)] relative text-left w-full min-h-[360px] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(15,138,115,0.05)] hover:border-[#0f8a73]"
              >
                {/* Header Metadata Block */}
                <div className="flex items-center justify-between mb-4 w-full">
                  <span className="text-[10px] font-black text-[#0f8a73] bg-[#e4f3f0] px-2.5 py-1 rounded-md tracking-wide uppercase">
                    {test.category}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400 font-mono">{test.code}</span>
                </div>

                {/* Central Info Segment */}
                <div className="flex flex-col flex-1 mb-5">
                  <h3 className="text-gray-800 text-[14px] font-black leading-snug tracking-tight mb-2 min-h-[40px] line-clamp-2">
                    {test.name}
                  </h3>
                  <div className="mt-2 space-y-1.5 text-[11px] font-bold text-gray-400">
                    <p>Report Delivery: <span className="text-gray-700 font-extrabold">{test.tat}</span></p>
                    <p>Sample Collection: <span className="text-[#0f8a73] font-extrabold">Home Available</span></p>
                  </div>
                </div>

                {/* Pricing & Operations Lower Control Panel */}
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-gray-800 text-xl font-black tracking-tight">₹{test.price}</span>
                    <span className="text-gray-400 text-xs line-through font-medium">₹{test.marketPrice}</span>
                    <span className="text-[#0f8a73] text-[11px] font-black">{test.discount}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 w-full">
                    <button 
                      onClick={() => navigate('/test-details')}
                      className="flex items-center justify-center border border-[#0f8a73] text-[#0f8a73] hover:bg-[#f4faf7] rounded-xl py-2 text-xs font-black transition duration-150 bg-white cursor-pointer outline-none"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => toggleCartAction(test.id)}
                      className={`flex items-center justify-center rounded-xl py-2 text-xs font-black transition duration-150 cursor-pointer border-none outline-none ${
                        cartTracker[test.id] 
                          ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                          : 'bg-[#0f8a73] hover:bg-[#0b6352] text-white'
                      }`}
                    >
                      <ShoppingCart size={13} className="mr-1" />
                      {cartTracker[test.id] ? 'Added' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <p className="text-gray-400 text-sm font-bold">No diagnostic parameters matched your specific tracking constraints.</p>
          </div>
        )}

        {/* Footer Protection Metadata Link */}
        <div className="pt-8 flex items-center justify-center gap-1.5 text-[10px] font-black text-gray-400 tracking-wide uppercase mt-4">
          <ShieldCheck size={14} className="text-teal-600" />
          <span>Verified Multi-Center Inventory Sync Active</span>
        </div>

      </div>
    </div>
  );
};

export default SearchCategoriesPage;