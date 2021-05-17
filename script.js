window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "  "
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [{
                y: 79.45,
                label: "Google"
            }, {
                y: 7.31,
                label: "Bing"
            }, {
                y: 7.06,
                label: "Baidu"
            }, {
                y: 4.91,
                label: "Yahoo"
            }, {
                y: 1.26,
                label: "Others"
            }]
        }]
    });
    chart.render();

}

google.charts.load('current', {
    packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Motivation Level');

    data.addRows([
        [{
            v: [8, 0, 0],
            f: '8 am'
        }, 1],
        [{
            v: [9, 0, 0],
            f: '9 am'
        }, 2],
        [{
            v: [10, 0, 0],
            f: '10 am'
        }, 3],
        [{
            v: [11, 0, 0],
            f: '11 am'
        }, 4],
        [{
            v: [12, 0, 0],
            f: '12 pm'
        }, 5],
        [{
            v: [13, 0, 0],
            f: '1 pm'
        }, 6],
        [{
            v: [14, 0, 0],
            f: '2 pm'
        }, 7],
        [{
            v: [15, 0, 0],
            f: '3 pm'
        }, 8],
        [{
            v: [16, 0, 0],
            f: '4 pm'
        }, 9],
        [{
            v: [17, 0, 0],
            f: '5 pm'
        }, 10],
    ]);

    var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Rating (scale of 1-10)'
        }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}

//  $(document).ready(function() {
//      // Add minus icon for collapse element which is open by default
//      $(".collapse.show").each(function() {
//          $(this).prev(".card-header").find(".fa").addClass("fa-angle-down").removeClass("fa-plus");
//      });

//      // Toggle plus minus icon on show hide of collapse element
//      $(".collapse").on('show.bs.collapse', function() {
//          $(this).prev(".card-header").find(".fa").removeClass("fa-angle-right").addClass("fa-angle-down");
//      }).on('hide.bs.collapse', function() {
//          $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-right");
//      });
//  });


$('.btnNext').click(function() {
    $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function() {
    $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
});

var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}