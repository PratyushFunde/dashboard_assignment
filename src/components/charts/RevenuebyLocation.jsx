import React from 'react'
// import worldMap from '../../assets/world-map.png' // 

const locations = [
  { name: 'New York', value: 72, top: '38%', left: '30%' },
  { name: 'San Francisco', value: 39, top: '40%', left: '24%' },
  { name: 'Sydney', value: 25, top: '65%', left: '78%' },
  { name: 'Singapore', value: 61, top: '55%', left: '70%' },
]

const RevenueByLocation = () => {
  return (
    <div className="bg-(--card) rounded-2xl p-6 h-full">
      <h2 className="text-lg font-semibold mb-4">Revenue by Location</h2>

      {/* Map */}
      <div className="relative h-[45] mb-6">
        <img
          src="https://images.unsplash.com/photo-1566935843973-aed0ddcb0ecc?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="World Map"
          className="w-full h-full object-contain opacity-90"
        />

        {/* Dots */}
        {locations.map((loc) => (
          <span
            key={loc.name}
            className="absolute w-2.5 h-2.5 bg-black rounded-full border-2 border-white"
            style={{ top: loc.top, left: loc.left }}
          />
        ))}
      </div>

      {/* Revenue list */}
      <div className="space-y-4">
        {locations.map((loc) => (
          <div key={loc.name}>
            <div className="flex justify-between text-sm font-medium">
              <span>{loc.name}</span>
              <span>{loc.value}K</span>
            </div>

            <div className="h-1 bg-[#e5edf5] rounded mt-2">
              <div
                className="h-1 bg-[#9bbbd4] rounded"
                style={{ width: `${(loc.value / 80) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RevenueByLocation
