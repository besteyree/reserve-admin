// <!-- Graph Script Start -->

      document.addEventListener("DOMContentLoaded", () => {
        new ApexCharts(document.querySelector("#reportsChart"), {
          series: [{
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 82, 56],
          }, {
            name: 'Revenue',
            data: [11, 32, 45, 32, 34, 52, 41]
          }, {
            name: 'Customers',
            data: [15, 11, 32, 18, 9, 24, 11]
          }],
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
          },
          markers: {
            size: 4
          },
          colors: ['#4154f1', '#2eca6a', '#ff771d'],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.4,
              stops: [0, 90, 100]
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 2
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
        }).render()
      })
   
    {/* <!-- Graph Script Ends --> */}

    {/* <!-- SMS Avaiable vs Spent vs Daily Spent Start --> */}
    
      document.addEventListener("DOMContentLoaded", () => {
        echarts.init(document.querySelector("#trafficChart")).setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
                value: 1048,
                name: 'Search Engine'
              },
              {
                value: 735,
                name: 'Direct'
              },
              {
                value: 580,
                name: 'Email'
              },
              {
                value: 484,
                name: 'Union Ads'
              },
              {
                value: 300,
                name: 'Video Ads'
              }
            ]
          }]
        })
      })
    
    {/* <!-- End --> */}


    // <!-- Whatsapp Avaiable vs Spent vs Daily Spent Start -->
  
      document.addEventListener("DOMContentLoaded", () => {
        echarts.init(document.querySelector("#whatappChart ")).setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
                value: 1048,
                name: 'Search Engine'
              },
              {
                value: 735,
                name: 'Direct'
              },
              {
                value: 580,
                name: 'Email'
              },
              {
                value: 484,
                name: 'Union Ads'
              },
              {
                value: 300,
                name: 'Video Ads'
              }
            ]
          }]
        })
      })
 
    // <!-- End -->