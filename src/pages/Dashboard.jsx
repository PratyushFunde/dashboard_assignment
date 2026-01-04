import React from 'react'
import FinCard from '../components/ecommerce/FinCard'
import { useDashboard } from '../context/DashboardContext'
import ProjectionChart from '../components/ecommerce/ProjectionChart';
import { useLayout } from '../context/LayoutContext';
import RevenueChart from '../components/charts/RevenueChart';
import RevenueByLocation from '../components/charts/RevenuebyLocation';
import TopSellingProducts from '../components/tables/TopSellingProducts';
import TotalSalesChart from '../components/charts/TotalSalesChart';
import { finCardBg, finCardText } from '../utils/finCardColors';

const Dashboard = () => {

  const { data } = useDashboard();
  const { leftOpen, rightOpen } = useLayout();

  console.log(data.finCards);

  return (
    <div className="main flex flex-col gap-7 no-scrollbar">
      <div className="r1 border border-red-500 md:border-blue-500">

        <div className="title mb-4 text-lg font-semibold">eCommerce</div>

        <div className="content border flex flex-col md:flex-row gap-5">
          <div className="cards flex gap-6 w-full flex-wrap  md:w-1/2 bd2">
            {data.finCards.map((item) => (
              <FinCard
                key={item.label}
                label={item.label}
                value={item.value}
                percentage={item.percentage}
                color={finCardBg[item.colorKey]}
                textColor={finCardText[item.colorKey]}
              />
            ))}
          </div>
          <div className="chart bg-(--card) text-(--text) flex flex-col rounded-2xl flex-1 py-2">
            <p className='ml-5 mt-3 font-semibold text-[14px]'>Projections vs Actuals</p>
            <ProjectionChart trigger={`${leftOpen}-${rightOpen}`} />
          </div>
        </div>


      </div>

      <div className="r2 flex flex-col md:flex-row border border-red-500 md:border-blue-500 gap-5 rounded-2xl">
        <div className="flex-1 ">
          <RevenueChart trigger={`${leftOpen}-${rightOpen}`} />
        </div>

        <div className="w-full md:w-[50%] border self-center  rounded-2xl">
          <RevenueByLocation trigger={`${leftOpen}-${rightOpen}`} />
        </div>
      </div>
  

      <div className="r3 flex flex-col border border-amber-600 md:flex-row gap-5">
        <div className='flex-1 bg-(--card) rounded-2xl'>

          <TopSellingProducts />
        </div>
        <div className="w-full md:w-90  bg-(--card) rounded-2xl">
          <TotalSalesChart />
        </div>
      </div>



    </div>

  )
}

export default Dashboard