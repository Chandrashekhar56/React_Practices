/* eslint-disable no-dupe-keys */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState, useRef } from 'react';
// import { Bar, Chart } from 'react-chartjs-2';
// import 'chart.js/auto'; // Import chart.js library

// const UserChart = () => {
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const [newUsers, setNewUsers] = useState([100, 120, 110, 90, 130, 150, 140, 160, 170, 180, 200, 190]);
//   const [oldUsers, setOldUsers] = useState([80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]);
//   const [highestNewUsers, setHighestNewUsers] = useState([]);
//   const [highestOldUsers, setHighestOldUsers] = useState([]);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const highestNew = [];
//     const highestOld = [];
//     for (let i = 0; i < months.length; i++) {
//       const newMax = Math.max(...newUsers.slice(0, i + 1));
//       const oldMax = Math.max(...oldUsers.slice(0, i + 1));
//       highestNew.push(newMax);
//       highestOld.push(oldMax);
//     }
//     setHighestNewUsers(highestNew);
//     setHighestOldUsers(highestOld);
//   }, [months.length, newUsers, oldUsers]);

//   return (
//     <div>
//       <h2>Highest User Count for New and Old Users by Month</h2>
//       <Chart
//         ref={chartRef}
//         type="bar"
//         data={{
//           labels: months,
//           datasets: [
//             { label: 'Highest New Users', backgroundColor: 'blue', data: highestNewUsers },
//             { label: 'Highest Old Users', backgroundColor: 'orange', data: highestOldUsers },
//           ],
//         }}
//         options={{
//           // Add your chart options here if needed
//         }}
//       />
//     </div>
//   );
// };

// export default UserChart;
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js library

const UserChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [newUsers, setNewUsers] = useState([100, 120, 110, 90, 130, 150, 140, 160, 170, 180, 200, 190]);
  const [oldUsers, setOldUsers] = useState([80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]);
  const [highestNewUsers, setHighestNewUsers] = useState([]);
  const [highestOldUsers, setHighestOldUsers] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const highestNew = [];
    const highestOld = [];
    for (let i = 0; i < months.length; i++) {
      const newMax = newUsers[i];
      const oldMax = oldUsers[i];
      highestNew.push(newMax);
      highestOld.push(oldMax);
    }
    setHighestNewUsers(highestNew);
    setHighestOldUsers(highestOld);
  }, [months.length, newUsers, oldUsers]);

  return (
    <div>
      <h2>Highest User Count for New and Old Users by Month</h2>
      <Chart
        ref={chartRef}
        type="bar"
        data={{
          labels: months,
          datasets: [
            {
              label: 'Highest New Users',
              data: highestNewUsers,
              backgroundColor: 'green',
            },
            {
              label: 'Highest Old Users',
              data: highestOldUsers,
              backgroundColor: 'blue',
            },
          ],
        }}
        options={{
          // Add your chart options here if needed
        }}
      />
    </div>
  );
};

export default UserChart;