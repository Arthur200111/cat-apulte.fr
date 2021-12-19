$(document).ready(function(){
    console.log('ready');
    $.ajax({
        url:"../data/membres/membres.csv",
        dataType:"text",
        success:function(data){
            var employee_data = data.split(/\r?\n|\r/);
            var membres ='';
            for(var count = 0; count<employee_data.length; count++){
                membres += '<div class = "flip flip-vertical">';
                var cell_data = employee_data[count].split("|");
                membres += '<div class="front" style="background-image: url(../data/membres/' + cell_data[0] + '_' + cell_data[1][0] + '.jpg)">';
                membres += '</div>';

                membres += '<div class = "back">';
                membres += '<h2>' + cell_data[0] + ' ' + cell_data[1] + '</h2>';
                membres += '<p>' + cell_data[3] + '</p>';
                membres += '</div>';

                membres += '</div>';
            }
            $('#container').html(membres);
        }
    });
});