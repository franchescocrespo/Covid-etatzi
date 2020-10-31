google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mes', 'Hombre', 'Mujer'],
          ['Abril', 1000, 400],
          ['Mayo', 1170, 460],
          ['Junio', 660, 1120],
          ['Julio', 1030, 540]
        ]);

        var options = {
          chart: {
            title: 'Contagios por edad y sexo',
            subtitle: 'Lo que sea, me da igual',
            width:'100%',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_contagios_edad'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      //AIzaSyDLPAg7_kNGknj4iPBXBt0qnttBv1XJ9G8

      google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDLPAg7_kNGknj4iPBXBt0qnttBv1XJ9G8'
      });
      google.charts.setOnLoadCallback(drawMarkersMap);
 
       function drawMarkersMap() {
       var data = google.visualization.arrayToDataTable([
         ['City',   'Population', 'Area'],
         ['Madrid',      2761477,    1285.31],
         ['Milan',     1324110,    181.76],
         ['Naples',    959574,     117.27],
         ['Turin',     907563,     130.17],
         ['Palermo',   655875,     158.9],
         ['Genoa',     607906,     243.60],
         ['Bologna',   380181,     140.7],
         ['Florence',  371282,     102.41],
         ['Fiumicino', 67370,      213.44],
         ['Anzio',     52192,      43.43],
         ['Ciampino',  38262,      11]
       ]);
 
       var options = {
         region: 'ES',
         displayMode: 'markers',
         colorAxis: {colors: ['green', 'blue']}
       };
 
       var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
       chart.draw(data, options);
     };