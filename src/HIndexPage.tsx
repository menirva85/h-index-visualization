import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';

// Master's Individual Effort Data (24 months / 8 quarters)
// KPI: 3 papers per year → 6 papers total.
// Self‑citation model with a one-quarter delay for citation accrual.
const masterIndividualData = [
  { period: 'Start', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 1', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 2', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 3', published: 1, cumulative: 1, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 4', published: 2, cumulative: 3, cumulativeCitations: 2, hIndex: 1 },
  { period: 'Quarter 5', published: 0, cumulative: 3, cumulativeCitations: 12, hIndex: 3 },
  { period: 'Quarter 6', published: 1, cumulative: 4, cumulativeCitations: 12, hIndex: 3 },
  { period: 'Quarter 7', published: 0, cumulative: 4, cumulativeCitations: 14, hIndex: 3 },
  { period: 'Quarter 8', published: 2, cumulative: 6, cumulativeCitations: 15, hIndex: 3 },
];

// PhD Individual Effort Data (36 months / 12 quarters)
// KPI: 5 papers per year → 15 papers total.
// Self‑citation model with one-quarter delay.
const phdIndividualData = [
  { period: 'Start', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 1', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 2', published: 0, cumulative: 0, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 3', published: 2, cumulative: 2, cumulativeCitations: 0, hIndex: 0 },
  { period: 'Quarter 4', published: 3, cumulative: 5, cumulativeCitations: 6, hIndex: 2 },
  { period: 'Quarter 5', published: 0, cumulative: 5, cumulativeCitations: 6, hIndex: 2 },
  { period: 'Quarter 6', published: 1, cumulative: 6, cumulativeCitations: 11, hIndex: 2 },
  { period: 'Quarter 7', published: 1, cumulative: 7, cumulativeCitations: 17, hIndex: 2 },
  { period: 'Quarter 8', published: 3, cumulative: 10, cumulativeCitations: 38, hIndex: 5 },
  { period: 'Quarter 9', published: 0, cumulative: 10, cumulativeCitations: 38, hIndex: 5 },
  { period: 'Quarter 10', published: 1, cumulative: 11, cumulativeCitations: 48, hIndex: 5 },
  { period: 'Quarter 11', published: 1, cumulative: 12, cumulativeCitations: 59, hIndex: 6 },
  { period: 'Quarter 12', published: 3, cumulative: 15, cumulativeCitations: 95, hIndex: 7 },
];

const HIndexPage: React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">
        Individual Publishing Effort
      </h1>
      
      {/* Description */}
      <p className="text-lg mb-8">
        Note: The data shown on this page are based solely on self-citations of all papers where the student is the first author.
      </p>
      
      {/* Master's Student Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Master's Student (24 Months)
        </h2>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Period</th>
              <th className="py-2 px-4 border">Published This Period</th>
              <th className="py-2 px-4 border">Cumulative Papers</th>
              <th className="py-2 px-4 border">Cumulative Self-Citations</th>
              <th className="py-2 px-4 border">H-Index</th>
            </tr>
          </thead>
          <tbody>
            {masterIndividualData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border">{row.period}</td>
                <td className="py-2 px-4 border text-center">{row.published}</td>
                <td className="py-2 px-4 border text-center">{row.cumulative}</td>
                <td className="py-2 px-4 border text-center">{row.cumulativeCitations}</td>
                <td className="py-2 px-4 border text-center">{row.hIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Master's Cumulative Self-Citations Chart */}
        <h3 className="text-xl font-semibold mb-2">Master's: Cumulative Self-Citations Progression</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={masterIndividualData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis
              label={{
                value: 'Cumulative Self-Citations',
                angle: -90,
                position: 'outsideLeft',
                dx: -20,
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cumulativeCitations"
              name="Cumulative Self-Citations"
              stroke="#4169E1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Master's H-Index Chart */}
        <h3 className="text-xl font-semibold mb-2 mt-8">Master's: H-Index Progression</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={masterIndividualData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis
              label={{
                value: 'H-Index',
                angle: -90,
                position: 'outsideLeft',
                dx: -20,
              }}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="hIndex"
              name="H-Index"
              stroke="#82ca9d"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
      
      {/* PhD Student Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">PhD Student (36 Months)</h2>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Period</th>
              <th className="py-2 px-4 border">Published This Period</th>
              <th className="py-2 px-4 border">Cumulative Papers</th>
              <th className="py-2 px-4 border">Cumulative Self-Citations</th>
              <th className="py-2 px-4 border">H-Index</th>
            </tr>
          </thead>
          <tbody>
            {phdIndividualData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border">{row.period}</td>
                <td className="py-2 px-4 border text-center">{row.published}</td>
                <td className="py-2 px-4 border text-center">{row.cumulative}</td>
                <td className="py-2 px-4 border text-center">{row.cumulativeCitations}</td>
                <td className="py-2 px-4 border text-center">{row.hIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PhD Cumulative Self-Citations Chart */}
        <h3 className="text-xl font-semibold mb-2">PhD: Cumulative Self-Citations Progression</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={phdIndividualData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis
              label={{
                value: 'Cumulative Self-Citations',
                angle: -90,
                position: 'outsideLeft',
                dx: -20,
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cumulativeCitations"
              name="Cumulative Self-Citations"
              stroke="#DC143C"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* PhD H-Index Chart */}
        <h3 className="text-xl font-semibold mb-2 mt-8">PhD: H-Index Progression</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={phdIndividualData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis
              label={{
                value: 'H-Index',
                angle: -90,
                position: 'outsideLeft',
                dx: -20,
              }}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7]}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="hIndex"
              name="H-Index"
              stroke="#9932CC"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default HIndexPage;
