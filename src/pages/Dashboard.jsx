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
      <div className="r1 min-w-0 ">

        <div className="title mb-4 text-lg font-semibold">eCommerce</div>

        <div className="content min-w-0 flex flex-col md:flex-row gap-5">
          <div className="cards min-w-0 flex gap-6 w-full flex-wrap  md:w-1/2 bd2">
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
          <div className="chart min-w-0 bg-(--card) text-(--text) flex flex-col rounded-2xl flex-1 py-2">
            <p className='ml-5 mt-3 font-semibold text-[14px]'>Projections vs Actuals</p>
            <ProjectionChart trigger={`${leftOpen}-${rightOpen}`} />
          </div>
        </div>


      </div>

      {/* <div className="r2 border min-w-0 flex flex-col md:flex-row gap-5 rounded-2xl">
        <div className="flex-1 min-w-0">
          <RevenueChart trigger={`${leftOpen}-${rightOpen}`} />
        </div>

        <div className="w-full border h-full min-w-0 md:w-[30%] self-center  rounded-2xl">
          <RevenueByLocation trigger={`${leftOpen}-${rightOpen}`} />
        </div>
      </div> */}
      <div className="r2 min-w-0 flex flex-col md:flex-row md:items-stretch gap-5 rounded-2xl">
        {/* Revenue Chart Container */}
        <div className="flex-1 min-w-0 flex flex-col">
          <RevenueChart trigger={`${leftOpen}-${rightOpen}`} />
        </div>

        {/* Location Chart Container */}
        <div className="w-full min-w-0 md:w-[30%] flex flex-col rounded-2xl">
          <RevenueByLocation trigger={`${leftOpen}-${rightOpen}`} />
        </div>
      </div>

      <div className="r3 min-w-0 flex flex-col md:flex-row gap-5">
        <div className='flex-1 bg-(--card) overflow-x-auto rounded-2xl'>

          <TopSellingProducts />
        </div>
        <div className="md:w-[30%] min-w-0 md:max-w-[105] bg-(--card) rounded-2xl">
          <TotalSalesChart />
        </div>
      </div>



    </div>

  )
}

export default Dashboard