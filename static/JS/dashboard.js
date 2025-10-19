// Accuracy line chart
const accuracyCtx = document.getElementById('accuracyChart');
new Chart(accuracyCtx, {
  type: 'line',
  data: {
    labels: ['T1','T2','T3','T4','T5','T6','T7','T8'],
    datasets: [{
      label: 'Độ chính xác (%)',
      data: [89.2,91.5,93.1,92.8,94.2,93.9,95.1,94.2],
      borderColor: '#667eea',
      backgroundColor: 'rgba(102,126,234,0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: { plugins:{legend:{display:false}}, scales:{y:{min:85,max:100}} }
});

// Category pie chart
const categoryCtx = document.getElementById('categoryChart');
new Chart(categoryCtx, {
  type: 'doughnut',
  data: {
    labels: ['Chó 🐕','Mèo 🐱','Xe 🚗','Người 👤','Phong cảnh 🏞️','Khác'],
    datasets: [{
      data: [28,24,18,15,12,3],
      backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF','#FF9F40']
    }]
  },
  options: { plugins:{legend:{position:'bottom'}} }
});

// Top 5 labels bar chart
const topLabelsCtx = document.getElementById('topLabelsChart');
new Chart(topLabelsCtx, {
  type: 'bar',
  data: {
    labels: ['Golden Retriever','Persian Cat','BMW X5','Portrait','Mountain'],
    datasets: [{
      label: 'Số lượng',
      data: [342,298,256,189,167],
      backgroundColor: [
        'rgba(255,99,132,0.8)',
        'rgba(54,162,235,0.8)',
        'rgba(255,206,86,0.8)',
        'rgba(75,192,192,0.8)',
        'rgba(153,102,255,0.8)'
      ],
      borderRadius: 8
    }]
  },
  options: { plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}} }
});

// Heatmap
const heatmapData = [
  { label: 'Chó', error: 8.2, color: 'bg-red-200' },
  { label: 'Mèo', error: 6.1, color: 'bg-yellow-200' },
  { label: 'Xe', error: 12.5, color: 'bg-red-300' },
  { label: 'Người', error: 4.3, color: 'bg-green-200' },
  { label: 'Phong cảnh', error: 3.1, color: 'bg-green-200' },
  { label: 'Đồ vật', error: 9.7, color: 'bg-orange-200' },
  { label: 'Động vật', error: 7.4, color: 'bg-yellow-200' },
  { label: 'Thực phẩm', error: 5.8, color: 'bg-yellow-200' }
];

const heatmapContainer = document.getElementById('heatmapContainer');
heatmapData.forEach(item => {
  const cell = document.createElement('div');
  cell.className = `${item.color} rounded-lg p-3 text-center border-2 border-white shadow-sm`;
  cell.innerHTML = `
    <div class="text-sm font-medium text-gray-700">${item.label}</div>
    <div class="text-lg font-bold text-gray-800">${item.error}%</div>`;
  heatmapContainer.appendChild(cell);
});
