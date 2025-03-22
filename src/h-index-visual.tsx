import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const HIndexProjection = () => {
  // Data for the main projection table - adjusted for new students with no prior publications
  const tableData = [
    { period: 'Initial', papers: 0, citations: 0, hIndex: 0 },
    { period: 'Year 1 Q1', papers: 0, citations: 0, hIndex: 0, journals: 0, proceedings: 0 },
    { period: 'Year 1 Q2', papers: 3, citations: 0, hIndex: 0, journals: 2, proceedings: 1 },
    { period: 'Year 1 Q3', papers: 6, citations: 3, hIndex: 1, journals: 4, proceedings: 2 },
    { period: 'Year 1 Q4', papers: 10, citations: 9, hIndex: 2, journals: 7, proceedings: 3 },
    { period: 'Year 1 End', papers: 15, citations: 15, hIndex: 3, journals: 10, proceedings: 5 },
    { period: 'Year 2 Q1', papers: 18, citations: 30, hIndex: 4, journals: 12, proceedings: 6 },
    { period: 'Year 2 Q2', papers: 22, citations: 50, hIndex: 5, journals: 15, proceedings: 7 },
    { period: 'Year 2 Q3', papers: 25, citations: 75, hIndex: 6, journals: 17, proceedings: 8 },
    { period: 'Year 2 Q4', papers: 30, citations: 105, hIndex: 7, journals: 20, proceedings: 10 },
    { period: 'Year 3 Q1', papers: 33, citations: 145, hIndex: 8, journals: 22, proceedings: 11 },
    { period: 'Year 3 Q2', papers: 37, citations: 190, hIndex: 9, journals: 25, proceedings: 12 },
    { period: 'Year 3 Q3', papers: 41, citations: 240, hIndex: 10, journals: 28, proceedings: 13 },
    { period: 'Year 3 Q4', papers: 45, citations: 300, hIndex: 11, journals: 30, proceedings: 15 }
  ];

  // Yearly summary data
  const yearlyData = [
    { year: 'Initial', papers: 0, citations: 0, hIndex: 0, journals: 0, proceedings: 0 },
    { year: 'Year 1', papers: 15, citations: 15, hIndex: 3, journals: 10, proceedings: 5 },
    { year: 'Year 2', papers: 30, citations: 105, hIndex: 7, journals: 20, proceedings: 10 },
    { year: 'Year 3', papers: 45, citations: 300, hIndex: 11, journals: 30, proceedings: 15 }
  ];

  // Publication types per year
  const publicationTypes = [
    { name: 'Year 1', journals: 10, proceedings: 5 },
    { name: 'Year 2', journals: 10, proceedings: 5 },
    { name: 'Year 3', journals: 10, proceedings: 5 }
  ];

  // Individual student progression
  const studentData = [
    { year: 'Initial', hIndex: 0, papers: 0, citations: 0 },
    { year: 'Year 1', hIndex: 3, papers: 15, citations: 15 },
    { year: 'Year 2', hIndex: 7, papers: 30, citations: 105 },
    { year: 'Year 3', hIndex: 11, papers: 45, citations: 300 }
  ];

  // Citation impact by paper group
  const citationImpactData = [
    { paperGroup: 'Year 1 Papers', yearOneEnd: 1, yearTwoEnd: 7, yearThreeEnd: 20 },
    { paperGroup: 'Year 2 Papers', yearOneEnd: 0, yearTwoEnd: 3, yearThreeEnd: 10 },
    { paperGroup: 'Year 3 Papers', yearOneEnd: 0, yearTwoEnd: 0, yearThreeEnd: 3 }
  ];

  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">H-Index Projection for New Postgraduate Students</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Collaborative Publication Strategy</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Team Structure & Publications</h3>
            <ul className="list-disc pl-5">
              <li>5 new postgraduate students (no prior publications)</li>
              <li>Each paper includes all group members as co-authors</li>
              <li>3 papers per student per year (15 total papers annually)</li>
              <li>2 journal articles + 1 conference proceeding per student</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Citation Strategy</h3>
            <ul className="list-disc pl-5">
              <li>Each new paper cites all team members' previous work</li>
              <li>Cross-citation network grows as publication count increases</li>
              <li>Strategic citation placement in both journals and proceedings</li>
              <li>All publications indexed in Scopus</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">H-Index Projection Timeline</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Time Period</th>
              <th className="py-2 px-4 border">Journal Articles</th>
              <th className="py-2 px-4 border">Conference Proceedings</th>
              <th className="py-2 px-4 border">Total Publications</th>
              <th className="py-2 px-4 border">Cumulative Citations</th>
              <th className="py-2 px-4 border">Projected H-Index</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : (row.period.includes('End') ? 'bg-blue-50 font-medium' : '')}>
                <td className="py-2 px-4 border font-medium">{row.period}</td>
                <td className="py-2 px-4 border text-center">{row.journals}</td>
                <td className="py-2 px-4 border text-center">{row.proceedings}</td>
                <td className="py-2 px-4 border text-center">{row.papers}</td>
                <td className="py-2 px-4 border text-center">{row.citations}</td>
                <td className="py-2 px-4 border text-center font-bold">{row.hIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">H-Index Growth Visualization</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tableData.filter(item => !item.period.includes('End'))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" tick={{fontSize: 10}} angle={-45} textAnchor="end" height={80} />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="hIndex" stroke="#8884d8" name="H-Index" strokeWidth={3} />
              <Line yAxisId="right" type="monotone" dataKey="papers" stroke="#82ca9d" name="Cumulative Papers" />
              <Line yAxisId="right" type="monotone" dataKey="citations" stroke="#ffc658" name="Cumulative Citations" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Yearly Publication Types</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={publicationTypes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="journals" fill="#8884d8" name="Journal Articles" />
                <Bar dataKey="proceedings" fill="#82ca9d" name="Conference Proceedings" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Citation Impact by Paper Group</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={citationImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="paperGroup" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="yearOneEnd" fill="#8884d8" name="Citations by Year 1 End" />
                <Bar dataKey="yearTwoEnd" fill="#82ca9d" name="Citations by Year 2 End" />
                <Bar dataKey="yearThreeEnd" fill="#ffc658" name="Citations by Year 3 End" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Individual Student Progress (Per Student)</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Time Period</th>
              <th className="py-2 px-4 border">Papers as Co-author</th>
              <th className="py-2 px-4 border">Citations Received</th>
              <th className="py-2 px-4 border">H-Index</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border font-medium">{row.year}</td>
                <td className="py-2 px-4 border text-center">{row.papers}</td>
                <td className="py-2 px-4 border text-center">{row.citations}</td>
                <td className="py-2 px-4 border text-center font-bold">{row.hIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-semibold mb-2">Important Considerations</h3>
        <ul className="list-disc pl-5">
          <li>Initial publication delay - first papers may take 6+ months to publish</li>
          <li>H-index growth begins slowly but accelerates as citation network develops</li>
          <li>Journal papers typically attract more citations than conference proceedings</li>
          <li>Publication quality and journal/conference rankings significantly impact citation rates</li>
          <li>Careful cross-citation strategy needed to avoid appearing as a citation cartel</li>
        </ul>
      </div>
    </div>
  );
};

export default HIndexProjection;
