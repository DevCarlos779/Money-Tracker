import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Conteiner,
  DontHaveTransactionsConteiner,
} from "../../Transactions/components/TransactionsTableStyles";
import { Receipt } from "lucide-react";

interface ObjectGastos {
  category: string;
  total: number;
}

interface ChartProps {
  data: ObjectGastos[];
}

export function Chart({ data }: ChartProps) {
  const defaultData: ObjectGastos[] = [
    { category: "Food", total: 0 },
    { category: "Transport", total: 0 },
    { category: "Leisure", total: 0 },
    { category: "Shopping", total: 0 },
    { category: "Health", total: 0 },
    { category: "Others", total: 0 },
    { category: "Saving", total: 0 },
  ];

  const chartData = defaultData.map((defaultItem) => {
    const total = data
      .filter((item) => item.category === defaultItem.category)
      .reduce((acc, item) => acc + item.total, 0);

    return {
      category: defaultItem.category,
      total,
    };
  });

  const hasData = chartData.some((item) => item.total > 0);

  return (
    <>
      {!hasData ? (
        <Conteiner>
          <DontHaveTransactionsConteiner>
            <Receipt size={40} />
            <h2>No expense data yet</h2>
            <p>Add your first expense to get started.</p>
          </DontHaveTransactionsConteiner>
        </Conteiner>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip
              formatter={(value) => {
                const val = Number(value ?? 0);

                return [
                  `R$ ${val.toFixed(2).replace(".", ",")}`,
                  "Total Spent",
                ];
              }}
            />

            <Bar dataKey="total" fill="#B93838" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
