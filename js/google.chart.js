google.charts.load('current', { 'packages': ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  onGoingMDTWithCaseAgeAndSpcialization();
  onGoingMDTWithSpecializationAndPriority();
  incomingMDTCasesWeekly();
  closeMDTCasesWeekly();
  primaryCaseNetwork();
  referralToTreatmentTimeLine();
  MDTEpisodes();
}

function onGoingMDTWithCaseAgeAndSpcialization() {
  // Some raw data (not necessarily accurate)
  let data = google.visualization.arrayToDataTable([
    ['Case Timeline in days', 'HeFPef', 'HeFRef', 'Atrial Fibrillation or Flutter', 'Valve Clinic', 'Other Heart Failure', 'Average'],
    ['0-2', 2, 2, 2, 1, 2, 9],
    ['3-5', 2, 2, 3, 3, 4, 14],
    ['6-10', 2, 1, 6, 5, 5, 19],
    ['11-20', 2, 5, 3, 4, 2, 16],
    ['21-30', 1, 2, 0, 0, 1, 4],
    ['31-60', 1, 0, 1, 1, 1, 4],
    ['>60', 1, 2, 0, 0, 0, 3]
  ]);

  let options = {
    vAxis: { format: 'decimal', title: 'Number of Cases' },
    hAxis: { title: 'Case Timeline in days' },
    isStacked: true,
    chartArea: { left: 50, width: '80%', bottom: 50, top: 20 },
    pointSize: 5,
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],

    height: 300,
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('onGoingMDTWithCaseAgeAndSpcialization'));
  chart.draw(data, options);
}

function onGoingMDTWithSpecializationAndPriority() {
  let data = google.visualization.arrayToDataTable([
    ['Specialisation', 'Urgent', 'Scheduled', 'Unscheduled', 'Tagged', 'Total'],
    ['HeFPef', 2, 7, 4, 2, 11],
    ['HeFRef', 3, 10, 7, 1, 17],
    ['Atrial Fibrillation or Flutter', 1, 8, 5, 1, 13],
    ['Valve Clinic', 2, 9, 9, 3, 18],
    ['Other Heart Failure', 3, 7, 3, 2, 10]
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
    chartArea: { left: 50, width: '77%', bottom: 75, top: 20 },
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],

    seriesType: 'bars',
    series: { 4: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('onGoingMDTWithSpecializationAndPriority'));
  chart.draw(data, options);
}

function incomingMDTCasesWeekly() {
  // Some raw data (not necessarily accurate)
  let data = google.visualization.arrayToDataTable([
    ['Week', 'HeFPef', 'HeFRef', 'Atrial Fibrillation or Flutter', 'Valve Clinic', 'Other Heart Failure', 'Total'],
    ['Week 1', 4, 8, 7, 2, 4, 25],
    ['Week 2', 6, 6, 4, 4, 3, 23],
    ['Week 3', 4, 6, 7, 1, 5, 23],
    ['Week 4', 8, 9, 9, 8, 1, 35]
  ]);

  let options = {
    title: 'Incoming',
    pointSize: 5,
    curveType: 'function',
    intervals: { style: 'points' },
    tooltip: { trigger: 'selection' },
    vAxis: { format: 'decimal', title: 'Number of Cases' },
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],
    legend: { position: 'none' },
    chartArea: { left: 50, right: 0 },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('incomingMDTCasesWeekly'));
  chart.draw(data, options);
}

function closeMDTCasesWeekly() {
  let data = google.visualization.arrayToDataTable([
    ['Week', 'HeFPef', 'HeFRef', 'Atrial Fibrillation or Flutter', 'Valve Clinic', 'Other Heart Failure', 'Total'],
    ['Week 1', 1, 4, 2, 5, 5, 17],
    ['Week 2', 4, 2, 6, 2, 3, 17],
    ['Week 3', 2, 1, 1, 4, 1, 9],
    ['Week 4', 1, 4, 5, 8, 2, 20]
  ]);


  let options = {
    title: 'Completed',
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],

    chart: {
      subtitle: 'Categorised based on specialisation',
    },
    pointSize: 5,
    curveType: 'function',

    vAxis: {
      format: 'decimal',
      // title: 'Number of Cases'
    },
    // hAxis: { title: 'Week' },
    chartArea: { left: 20 },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }



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
    // chart: {
    //   title: 'Primary Case Network',
    // },
    chartArea: { left: '100', width: '100%', right: '0', bottom: 90, top: 40 },
    bars: 'vertical',
    colors: ['#288eb2', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],
    legend: { position: 'top' },

    vAxis: {
      format: 'decimal', title: 'Number of Patients'
    },
    hAxis: {
      title: 'General Practice Name',
      slantedText: true,
      slantedTextAngle: '20'
    },
    height: 300,

    isStacked: true
  };

  let chart = new google.visualization.ColumnChart(document.getElementById('primaryCaseNetwork'));

  chart.draw(data, options);
}

function referralToTreatmentTimeLine() {
  let data = google.visualization.arrayToDataTable([
    ['Specialization', 'Case Creation', 'Episode Scheduled', 'Episode', 'Actions Agreed', 'Actions Sent', 'Actions Closed', 'Case Closed '],
    ['AF-', 1, 10, 11, 11, 11, 16.75, 16.75],
    ['HeFRef', 1, 8, 9, 9, 9, 13.5, 13.5],
    ['HeFPef', 1, 13, 14, 14, 14, 16.5, 16.5]
  ]);

  let options = {
    title: 'Timeline for each MDT action',
    chartArea: { left: '60', width: '70%' },
    // isStacked: true,
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],



    hAxis: {
      title: 'Treatment Timeline in days',
      minValue: 0,
    },
    vAxis: {
      title: 'Specialisation'
    }
  };
  let chart = new google.visualization.BarChart(document.getElementById('referralToTreatmentTimeLine'));
  chart.draw(data, options);
}

function MDTEpisodes() {
  let data = google.visualization.arrayToDataTable([
    ['MDT Episode', 'AF-', 'HeFRef', 'HeFPef'],
    ['1', 2, 9, 3],
    ['2', 4, 8, 3],
    ['3', 5, 10, 1],
    ['4', 3, 9, 3],
    ['>4', 2, 5, 2]
  ]);

  let options = {
    title: 'MDT episodes per case by subspeciality',
    chartArea: { left: '40', width: '70%' },
    isStacked: true,
    colors: ['#5fdfb1', '#1271B0', '#e15c5b', '#edaf28', '#12A6B0', '#4EE2EC', '#98AFC7', '#488AC7', '#25383C'],


    hAxis: {
      title: 'MDT Episodes',
      minValue: 0,
    },
    vAxis: {
      title: 'Case Number'
    }
  };
  let chart = new google.visualization.ColumnChart(document.getElementById('MDTEpisodes'));
  chart.draw(data, options);
}