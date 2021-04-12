// Bar chart
const labels = [
  'Agriarche Ltd',
  'Alh. Suleiman Yau',
  'Alh. Abubakar Kabir',
  'Bashar Sani',
  'Flo Movina',
  'Coscharis',
  'Okwori Mayann',
  'Animal Care',
  'Tribe Agric'
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Aggregation by Food Processors',
    data: [39402160, 6070260, 6699056, 9192880, 33073640, 13249220, 6686400, 1000000, 12000000],
    backgroundColor: ['rgba(244, 148, 37,.2)'],
    borderColor: ['rgba(244, 148, 37, 1)'],
    borderWidth: 1
  }]
};

const options = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'x',
    legend: {
      enabled: false,
      position: 'left',
      labels: {
        fontColor: '#444'
      }
    },
  },
}

let fpChart = new Chart(document.getElementById('fpChart'), options);