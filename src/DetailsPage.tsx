import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DetailsPage: React.FC = () => {
  // Final data for Master's student with 6 papers:
  // Self-citation pattern: Paper 1: 5 citations, Paper 2: 4, Paper 3: 3, Paper 4: 2, Paper 5: 1, Paper 6: 0.
  // Final h-index = 3.
  const masterPapers = [
    { rank: 1, title: "Paper 1", citations: 5, role: "First Author" },
    { rank: 2, title: "Paper 2", citations: 4, role: "First Author" },
    { rank: 3, title: "Paper 3", citations: 3, role: "First Author" },
    { rank: 4, title: "Paper 4", citations: 2, role: "First Author" },
    { rank: 5, title: "Paper 5", citations: 1, role: "First Author" },
    { rank: 6, title: "Paper 6", citations: 0, role: "First Author" },
  ];

  // Final data for PhD student with 15 papers:
  // Self-citation pattern: Paper 1: 14, Paper 2: 13, …, Paper 15: 0.
  // Final h-index = 7.
  const phdPapers = [
    { rank: 1, title: "Paper 1", citations: 14, role: "First Author" },
    { rank: 2, title: "Paper 2", citations: 13, role: "First Author" },
    { rank: 3, title: "Paper 3", citations: 12, role: "First Author" },
    { rank: 4, title: "Paper 4", citations: 11, role: "First Author" },
    { rank: 5, title: "Paper 5", citations: 10, role: "First Author" },
    { rank: 6, title: "Paper 6", citations: 9, role: "First Author" },
    { rank: 7, title: "Paper 7", citations: 8, role: "First Author" },
    { rank: 8, title: "Paper 8", citations: 7, role: "First Author" },
    { rank: 9, title: "Paper 9", citations: 6, role: "First Author" },
    { rank: 10, title: "Paper 10", citations: 5, role: "First Author" },
    { rank: 11, title: "Paper 11", citations: 4, role: "First Author" },
    { rank: 12, title: "Paper 12", citations: 3, role: "First Author" },
    { rank: 13, title: "Paper 13", citations: 2, role: "First Author" },
    { rank: 14, title: "Paper 14", citations: 1, role: "First Author" },
    { rank: 15, title: "Paper 15", citations: 0, role: "First Author" },
  ];

  return (
    <div className="p-4 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Details</h1>
      <p className="text-lg mb-4">
        This page provides detailed information about the research methodology and data analysis.
      </p>
      <p className="text-lg mb-8">
        The tables and charts below show the final citation statistics after the student has completed their study.
        All citations are derived solely from self-citations—each new paper cites all previously published papers.
      </p>

      {/* Master's Student Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Master's Student Citation Statistics</h2>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Paper Title</th>
              <th className="py-2 px-4 border">Paper Citations</th>
              <th className="py-2 px-4 border">Student's Role</th>
            </tr>
          </thead>
          <tbody>
            {masterPapers.map((paper, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border text-center">{paper.rank}</td>
                <td className="py-2 px-4 border">{paper.title}</td>
                <td className="py-2 px-4 border text-center">{paper.citations}</td>
                <td className="py-2 px-4 border text-center">{paper.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-lg mt-4">
          Final H-index for Master's student: <strong>3</strong>
        </p>
        <p className="text-lg mb-8">
          Explanation: The Master's student has 6 papers with self-citation counts of [5, 4, 3, 2, 1, 0]. Three papers have at least 3 citations.
        </p>

        {/* Supplementary Chart for Master's Student */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={masterPapers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis label={{ value: 'Citations', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="citations" name="Paper Citations" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PhD Student Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">PhD Student Citation Statistics</h2>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Paper Title</th>
              <th className="py-2 px-4 border">Paper Citations</th>
              <th className="py-2 px-4 border">Student's Role</th>
            </tr>
          </thead>
          <tbody>
            {phdPapers.map((paper, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border text-center">{paper.rank}</td>
                <td className="py-2 px-4 border">{paper.title}</td>
                <td className="py-2 px-4 border text-center">{paper.citations}</td>
                <td className="py-2 px-4 border text-center">{paper.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-lg mt-4">
          Final H-index for PhD student: <strong>7</strong>
        </p>
        <p className="text-lg mb-8">
          Explanation: The PhD student has 15 papers with self-citation counts of [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]. Seven papers have at least 7 citations.
        </p>

        {/* Supplementary Chart for PhD Student */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={phdPapers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis label={{ value: 'Citations', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="citations" name="Paper Citations" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DetailsPage;
