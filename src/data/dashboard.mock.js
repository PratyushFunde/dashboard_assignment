// data/dashboard.mock.js
export const dashboardData = {
  stats: [
    { label: "Revenue", value: "$24,000" },
    { label: "Users", value: "1,245" },
    { label: "Orders", value: "320" },
    { label: "Growth", value: "+12%" },
  ],
  charts: {
    sales: [10, 20, 30, 25],
  },

  // finCards:[
  //   {
  //       label:'Customers',
  //       value:'3,781',
  //       percentage:'11.01',
  //       bgColor:'#E3F5FF',
  //       positive:true
  //   },
  //   {
  //       label:'Orders',
  //       value:'1,219',
  //       percentage:'0.03',
  //       bgColor:'#F7F9FB',
  //       positive:false
  //   },
  //   {
  //       label:'Revenue',
  //       value:'$695',
  //       percentage:'15.03',
  //       bgColor:'#F7F9FB',
  //       positive:true
  //   },
  //   {
  //       label:'Growth',
  //       value:'30.1%',
  //       percentage:'6.08',
  //       bgColor:'#E5ECF6',
  //       positive:true
  //   },
  // ]
  finCards: [
  { label: 'Customers', value: '3,781', percentage: '11.01', colorKey: 'customers', positive: true },
  { label: 'Orders', value: '1,219', percentage: '0.03', colorKey: 'orders', positive: false },
  { label: 'Revenue', value: '$695', percentage: '15.03', colorKey: 'revenue', positive: true },
  { label: 'Growth', value: '30.1%', percentage: '6.08', colorKey: 'growth', positive: true },
]

}
