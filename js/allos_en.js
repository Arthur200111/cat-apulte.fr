$(document).ready(function(){
    console.log('ready');
    $.ajax({
        url:"../../../data/allos/allos.csv",
        dataType:"text",
        success:function(data){
            var allos_data = data.split(/\r?\n|\r/);
            var allos ='';
            for(var count = 0; count<allos_data.length; count++){
                allos += '<div class="allo">';
                var cell_data = allos_data[count].split("|");

                allos += '<div class="content">';
                allos += '<h2 class="title">' + cell_data[0] + '</h2>';
                allos += '<p class="copy">' + cell_data[2] + '</p>';
                allos += '<style>.allo:nth-child('+(count+1)+'):before { background-image: url(../../../data/allos/' + cell_data[3] + '.jpg);}</style>'
                allos += '</div>';

                allos += '</div>';
            }
            $('#container').html(allos);
        }
    });
});