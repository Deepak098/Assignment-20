$(function(){
    
        $.get('/cities', appendToList);
    
        $('#myForm').on('submit', function (event) {
           event.preventDefault();
    
           var form = $(this);
           var cityData = form.serialize();

           
           $.ajax({
               'type': 'POST',
               'url': '/cities',
               'data': cityData
           }).fail(function () {
               console.log("Error");
           }).done(function (cityName) {
               appendToList([cityName]);
               form.trigger('reset');
           });
        });
    
        function appendToList(cities) {
            var list = [];
            var content, city;
            for(var i in cities){
                city = cities[i];
                content = '<a href="/cities/'+city+'">'+city+'</a>';
                list.push($('<li>', { html: content }));
            }
            $('.city-list').append(list);
        }
    });
    $('#myForm').on('update', function (event) {
        event.update()});
    $('#myForm').on('delete', function (event) {
        $target = $(e.target());
        event.delete();
        
        
        $.ajax({
            'type': 'delete',
            'url': '/cities',
            'data': cityData,
            seccess: function (){
                alert('delete cityData')
                window.location.href='/'
            }
        }).fail(function () {
            console.log("Error");
        });
     });
    
    
