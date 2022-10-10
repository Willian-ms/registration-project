$(document).ready(function () {
    $.ajax({
        method: 'post',
        url: '/getPerson',
        datatype: 'json',
        success: function(response){
            $('#tablePerson').DataTable({
                columnDefs:[{
                    "targets":0,
                    "visivle": false
                }],
                data: response,
                columns:[
                    {'data':'id'},
                    {'data':'nome'},
                    {'data':'cpf'}
                ],
            responsive: true,
            select: true,
            orderCellsTop: true,
            dom: '<"top"B><"left">t<"bottom"rlpi><"clear">',
            buttons: [
                { extend: 'copy', text: 'Copiar' }, 
                'csv', 
                'excel', 
                { extend: 'print', text: 'Imprimir' },
                ]
            })
        }
    })
})

