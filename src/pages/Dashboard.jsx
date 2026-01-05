import React from 'react'
import FinCard from '../components/ecommerce/FinCard'
import { useDashboard } from '../context/DashboardContext'
import ProjectionChart from '../components/ecommerce/ProjectionChart'
import { useLayout } from '../context/LayoutContext'
import RevenueChart from '../components/charts/RevenueChart'
import RevenueByLocation from '../components/charts/RevenuebyLocation'
import TopSellingProducts from '../components/tables/TopSellingProducts'
import TotalSalesChart from '../components/charts/TotalSalesChart'
import { finCardBg, finCardText } from '../utils/finCardColors'
import { useSearch } from '../context/SearchContext'

const Dashboard = () => {
  const { data } = useDashboard()
  const { leftOpen, rightOpen } = useLayout()
  const { query } = useSearch()

  const hasQuery = query.trim().length > 0

  const isMatch = (keywords) =>
    !hasQuery ||
    keywords.some(k =>
      k.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div className="main flex flex-col gap-7 no-scrollbar">

      {/* ================= ROW 1 ================= */}
      <Section show={isMatch(['cards', 'financial', 'projection', 'chart'])}>
        <div className="r1 min-w-0">
          <div className="title mb-4 text-lg font-semibold">
            eCommerce
          </div>

          <div className="content min-w-0 flex flex-col md:flex-row gap-5">

            {/* Cards */}
            <Section show={isMatch(['cards', 'financial'])}>
              <div className="cards min-w-0 flex gap-6 w-full flex-wrap md:w-1/2">
                {data.finCards.map(item => (
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
            </Section>

            {/* Projection Chart */}
            <Section show={isMatch(['projection', 'actuals', 'chart'])}>
              <div className="chart min-w-0 bg-(--card) text-(--text) flex flex-col rounded-2xl flex-1 py-2">
                <p className="ml-5 mt-3 font-semibold text-[14px]">
                  Projections vs Actuals
                </p>
                <ProjectionChart trigger={`${leftOpen}-${rightOpen}`} />
              </div>
            </Section>

          </div>
        </div>
      </Section>

      {/* ================= ROW 2 ================= */}
      <Section show={isMatch(['revenue', 'location'])}>
        <div className="r2 min-w-0 flex flex-col md:flex-row md:items-stretch gap-5 rounded-2xl">

          <Section show={isMatch(['revenue'])}>
            <div className="flex-1 min-w-0 flex flex-col">
              <RevenueChart trigger={`${leftOpen}-${rightOpen}`} />
            </div>
          </Section>

          <Section show={isMatch(['location', 'country'])}>
            <div className="w-full min-w-0 md:w-[30%] flex flex-col rounded-2xl">
              <RevenueByLocation trigger={`${leftOpen}-${rightOpen}`} />
            </div>
          </Section>

        </div>
      </Section>

      {/* ================= ROW 3 ================= */}
      <Section show={isMatch(['products', 'sales'])}>
        <div className="r3 min-w-0 flex flex-col md:flex-row gap-5">

          <Section show={isMatch(['products', 'top'])}>
            <div className="flex-1 bg-(--card) overflow-x-auto rounded-2xl">
              <TopSellingProducts />
            </div>
          </Section>

          <Section show={isMatch(['sales', 'total'])}>
            <div className="md:w-[30%] min-w-0 bg-(--card) rounded-2xl">
              <TotalSalesChart
                leftOpen={leftOpen}
                rightOpen={rightOpen}
              />
            </div>
          </Section>

        </div>
      </Section>

    </div>
  )
}

const Section = ({ show, children }) => {
  if (!show) return null
  return <>{children}</>
}

export default Dashboard
