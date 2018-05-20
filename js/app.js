const graph1 = document.getElementById("fiat");
const graph2 = document.getElementById("crypto");
const xhttp = new XMLHttpRequest();
const cryptoAPI = "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=7";
const fiatAPI = "https://min-api.cryptocompare.com/data/histoday?fsym=USD&tsym=EUR&limit=7";
const crytpo = ""; //Future connection with button select dropdown

let fiatPrice0 = " ";
let fiatPrice1 = " ";
let fiatPrice2 = " ";
let fiatPrice3 = " "
let fiatPrice4 = " ";
let fiatPrice5 = " ";
let fiatPrice6 = " ";

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let prices = JSON.parse(xhttp.responseText);
    fiatPrice0 = prices.Data[0].close;
    fiatPrice1 = prices.Data[1].close;
    fiatPrice2 = prices.Data[2].close;
    fiatPrice3 = prices.Data[3].close;
    fiatPrice4 = prices.Data[4].close;
    fiatPrice5 = prices.Data[5].close;
    fiatPrice6 = prices.Data[6].close;


    // console.log(cryptPrice0);


  }
};
xhttp.open("GET", fiatAPI, false);
xhttp.send();


//Graph 1 for USD
Highcharts.chart(graph1, {
  chart: {
    type: 'areaspline',
    zoomType: 'xy'
  },
  title: {
    text: 'USD Week Growth'
  },
  legend: {
    enabled: false
  },
  xAxis: {
    categories: [
      (6).days().ago().toString("MMMM dd"),
      (5).days().ago().toString("MMMM dd"),
      (4).days().ago().toString("MMMM dd"),
      (3).days().ago().toString("MMMM dd"),
      (2).days().ago().toString("MMMM dd"),
      (1).days().ago().toString("MMMM dd"),
      "Today"
    ],
    plotBands: [{ // visualize the weekend
      // from: 2.5,
      // to: 4.5,
      // color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    floor:.80,
    ceiling: .9,
    title: {
      text: 'Price'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' euros'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      // allowPointSelect:true, disabled until I style the individual point (default is grey on focus)
      marker: {
        enabled: false
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: -1,
          y2: 1
        },
        stops: [
          [0, '#4fc2ee'],
          [1, '#FFFF']
        ]
      }

    }
  },
  series: [{
    color: '#4fc2ee',
    name: 'USD/EUR',
    data: [fiatPrice0, fiatPrice1, fiatPrice2, fiatPrice3, fiatPrice4, fiatPrice5, fiatPrice6]
  }]
});

/////////////////////////////////////////////////////////////////Graph 2 for ETH///////////////////////////////////////////////////////////////////////////////////////////////////////////

let cryptPrice0 = " ";
let cryptPrice1 = " ";
let cryptPrice2 = " ";
let cryptPrice3 = " "
let cryptPrice4 = " ";
let cryptPrice5 = " ";
let cryptPrice6 = " ";

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let prices = JSON.parse(xhttp.responseText);
    cryptPrice1 = prices.Data[1].close;
    cryptPrice2 = prices.Data[2].close;
    cryptPrice3 = prices.Data[3].close;
    cryptPrice4 = prices.Data[4].close;
    cryptPrice5 = prices.Data[5].close;
    cryptPrice6 = prices.Data[6].close;
    cryptPrice0 = prices.Data[0].close;

    // console.log(cryptPrice0);


  }
};
xhttp.open("GET", cryptoAPI, false);
xhttp.send();


Highcharts.chart(graph2, {
  chart: {
    type: 'areaspline',
    zoomType: 'xy'
  },
  title: {
    text: 'ETH Week Growth'
  },
  legend: {
    enabled: false
  },
  xAxis: {
    categories: [
      (6).days().ago().toString("MMMM dd"),
      (5).days().ago().toString("MMMM dd"),
      (4).days().ago().toString("MMMM dd"),
      (3).days().ago().toString("MMMM dd"),
      (2).days().ago().toString("MMMM dd"),
      (1).days().ago().toString("MMMM dd"),
      "Today"
    ],
    plotBands: [{ // visualize the weekend
      // from: 4.5,
      // to: 6.5,
      // color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    floor: 600,
    ceiling: 780,
    title: {
      text: 'Price'
    }


  },
  tooltip: {
    shared: true,
    valueSuffix: ' dollars'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.1,
      // allowPointSelect:true, See above chart
      marker: {
        enabled: false
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: -1,
          y2: 1
        },
        stops: [
          [0, '#26dd80'],
          [1, '#FFFF']
        ]
      }
    }
  },
  series: [{
    color: "#26dd80",
    name: 'ETH/USD',
    data: [cryptPrice0, cryptPrice1, cryptPrice2, cryptPrice3, cryptPrice4, cryptPrice5, cryptPrice6]
  }]
});
