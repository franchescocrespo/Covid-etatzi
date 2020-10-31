// Chart por sexo
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Genre', 'Hombres', 'Mujeres', { role: 'annotation' } ],
          ['0-9', 1765, 1718, ''],
          ['10-19', 3014, 2862, ''],
          ['20-29', 4232, 4718, ''],
          ['30-39', 4084, 5024, ''],
          ['40-49', 5139, 6071, ''],
          ['50-59', 5127, 6121, ''],
          ['60-69', 3595, 3535, ''],
          ['70-79', 2478, 2333, ''],
          ['80-89', 1765, 2899, ''],
          ['>90', 532, 1808, '']
        ]);
  
        var options = {
          title: 'Número de contagios en función de la Edad y Sexo',
          height: 500,
          legend: { position: 'top', maxLines: 3 },
          bar: { groupWidth: '70%' },
          isStacked: false,
        };

        var chart = new google.charts.Bar(document.getElementById('chart_contagios_sexo'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
