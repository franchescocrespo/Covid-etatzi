google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'x');
        data.addColumn('number', 'Fallecidos');
        data.addColumn({id:'Fallecidos', type:'number', role:'interval'});
        data.addColumn({id:'Tos', type:'number', role:'interval'});
        data.addColumn({id:'Fiebre', type:'number', role:'interval'});
        data.addColumn({id:'Pulmonia', type:'number', role:'interval'});
        data.addColumn({id:'Fatiga', type:'number', role:'interval'});
        data.addColumn({id:'Perdida', type:'number', role:'interval'});
  
        data.addRows([
            [4, 40, 33, 18, 11, 19, 23, 25],
            [5, 6, 1, 5, 1, 3, 5, 4],
            [6, 6, 3, 1, 0, 2, 1, 6],
            [7, 4, 0, 0, 0, 2, 0, 3],
            [8, 15, 1, 4, 10, 12, 6, 14],
            [9, 21, 15, 14, 10, 12, 20, 8],
            [10, 15, 7, 6, 4, 8, 14, 7]]);
  
        // The intervals data as narrow lines (useful for showing raw source data)
        var options_lines = {
            title: 'Fallecidos',
            curveType: 'function',
            lineWidth: 5,
            interval: {
              'Fallecidos': { 'style':'line', 'color':'yellow', 'lineWidth': 0.5 },
              'Tos': { 'style':'line', 'color':'red', 'lineWidth': 1 },
              'Fiebre': { 'style':'line', 'color':'#117A8B', 'lineWidth': 2 },
              'Pulmonia': { 'style':'line', 'color':'green', 'lineWidth': 2 },
              'Fatiga': { 'style':'line', 'color':'blue', 'lineWidth': 2 },
              'Perdida': { 'style':'line', 'color':'gray', 'lineWidth': 2 }
          },
            legend: 'right'
        };
  
        var chart_lines = new google.visualization.LineChart(document.getElementById('chart_fallecidos'));
        chart_lines.draw(data, options_lines);
      }