  var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['housing', 0],
            ['transportation', 0],
            ['educational', 0],
            ['personal', 0],
            ['savings', 0]
        ],
        labels: true,
        type : 'donut'
    },
    padding: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    color: {
      pattern: ['#f9c500', '#00a8bc', '#9de031', '#ff00b9', '#ea8800']
    },
    interaction: {
      enabled: false
    },
    donut: {
      width: 53
    }
  });
