google.charts.load('current', { 'packages': ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  onGoingMDTWithCaseAgeAndSpcialization();
  onGoingMDTWithSpecializationAndPriority();
  incomingMDTCasesWeekly();
  closeMDTCasesWeekly();
  primaryCaseNetwork();
}

function onGoingMDTWithCaseAgeAndSpcialization() {
  // Some raw data (not necessarily accurate)
  let data = google.visualization.arrayToDataTable([
    ['Case Timeline in days', 'HeFPef',	'HeFRef',	'Atrial Fibrillation or Flutter',	'Valve Clinic',	'Other Heart Failure',	'Aetiology', 'Average'],
    ['0-2', 2,	2,	2,	1,	2,	0, 9],
    ['3-5', 2,	2,	3,	1,	3,	0,	11],
    ['6-10', 5,	4,	7,	12,	8,	1,	37],
    ['11-20', 0,	3,	2,	0,	0,	0,	5],
    ['21-30', 1,	2,	0,	0,	1,	2,	6],
    ['31-60', 0,	0,	1,	1,	1,	0,	3],
    ['>60', 1,	2,	0,	0,	0,	0,	3]
  ]);

  let options = {
    vAxis: { format: 'decimal', title: 'Number of Cases' },
    hAxis: { title: 'Case Timeline in days' },
    isStacked: true,
    seriesType: 'bars',
    series: { 6: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('onGoingMDTWithCaseAgeAndSpcialization'));
  chart.draw(data, options);
}

function onGoingMDTWithSpecializationAndPriority() {
  let data = google.visualization.arrayToDataTable([
    ['Specialisation', 'High Priority', 'Scheduled', 'Tagged', 'Total'],
    ['HeFPef', 2,	7,	2,	11],
    ['HeFRef', 3,	10,	1,	15],
    ['Atrial Fibrillation or Flutter', 1,	8,	1,	15],
    ['Valve Clinic', 2,	9,	3,	15],
    ['Other Heart Failure', 3,	7,	2,	15],
    ['Aetiology', 0,	2,	1,	3]
  ]);


  let options = {
    // title: 'Ongoing MDT Cases',

    chart: {

      subtitle: 'Categorised based on Specialisation',
    },
    pointSize: 5,
    curveType: 'function',
    vAxis: { format: 'decimal', title: 'Number of Cases' },
    hAxis: { title: 'Specialitisation', slantedText: true },

    seriesType: 'bars',
    series: { 3: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('onGoingMDTWithSpecializationAndPriority'));
  chart.draw(data, options);
}

function incomingMDTCasesWeekly() {
  // Some raw data (not necessarily accurate)
  let data = google.visualization.arrayToDataTable([
    ['Week', 'HeFPef', 'HeFRef', 'Atrial Fibrillation or Flutter', 'Valve Clinic', 'Other Heart Failure', 'Aetiology', 'Total'],
    ['Week 1', 4,	8,	7,	2,	4,	3,	28],
    ['Week 2', 6,	6,	4,	4,	3,	6,	29],
    ['Week 3', 4,	6,	7,	1,	5,	3,	26],
    ['Week 4', 8,	9,	9,	8,	1,	4,	39]
  ]);

  let options = {
    // title: 'Incoming MDT Cases',
    pointSize: 5,
    curveType: 'function',
    intervals: { style: 'points' },
    tooltip: { trigger: 'selection' },
    vAxis: { format: 'decimal', title: 'Number of Cases' },

    seriesType: 'bars',
    series: { 6: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('incomingMDTCasesWeekly'));
  chart.draw(data, options);
}

function closeMDTCasesWeekly() {
  let data = google.visualization.arrayToDataTable([
    ['Week', 'HeFPef', 'HeFRef', 'Atrial Fibrillation or Flutter', 'Valve Clinic', 'Other Heart Failure', 'Aetiology', 'Total'],
    ['Week 1', 1,	4,	2,	5,	5,	2,	19],
    ['Week 2', 4,	2,	6,	2,	3,	4,	21],
    ['Week 3', 2,	1,	1,	4,	1,	7,	16],
    ['Week 4', 1,	4,	5,	8,	2,	4,	24]
  ]);


  let options = {
    // title: 'Closed MDT Cases',

    chart: {
      subtitle: 'Categorised based on specialisation',
    },
    pointSize: 5,
    curveType: 'function',

    vAxis: {
      format: 'decimal',
      title: 'Number of Cases'
    },
    hAxis: { title: 'Week' },

    seriesType: 'bars',
    series: { 6: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('closeMDTCasesWeekly'));
  chart.draw(data, options);
}

function primaryCaseNetwork() {
  let data = google.visualization.arrayToDataTable([
    ['Listed Surgery', 'Patients Referred'],
    ['Deepings Practice', 5],
    ['Munro Medical centre', 3],
    ['Beechfield Practice', 6],
    ['Lincs Community Spalding', 6],
    ['Lakeside Stamford', 7],
    ['Lakeside Bourne', 8],
    ['Galletly Bourne', 4],
    ['Gosberton Practice', 3],
    ['Holbeach Practice', 5],
    ['Littlebury Surgery', 9],
    ['Abbeyview Surgery', 4],
    ['Longsutton Surgery', 8],
    ['Moulton Medical Centre', 3],
    ['Sutterton Surgery', 2]
  ]);

  let options = {
    chart: {
      title: 'Primary Case Network',
    },
    bars: 'vertical',
    vAxis: {
      format: 'decimal', title: 'Number of Patients'
    },
    hAxis: {
      title: 'Listed Surgery',
      slantedText: true,
      slantedTextAngle: '90'
    },
    height: 400,
    isStacked: true
  };

  let chart = new google.charts.Bar(document.getElementById('primaryCaseNetwork'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}