import { TrendingUp } from 'lucide-react'

const FinCard = ({ label, value, percentage, color, textColor }) => {



    return (
        <div className={`group rounded-2xl p-6 flex flex-col gap-2  w-full sm:w-[calc(50%-12px)]`}
            style={{
                background: color,
                color: textColor
            }}
        >
            <p className="font-semibold">{label}</p>

            <div className="flex justify-between items-center">
                {/* Number */}
                <p
                    className="
            font-semibold text-2xl
            order-1 group-hover:order-2
            transition-all duration-300 ease-in-out
          "
                >
                    {value}
                </p>

                {/* Percentage */}
                <p
                    className="
            flex items-center gap-1
            order-2 group-hover:order-1
            transition-all duration-300 ease-in-out
          "
                >
                    {percentage}<TrendingUp size={16} />
                </p>
            </div>
        </div>
    )
}

export default FinCard
