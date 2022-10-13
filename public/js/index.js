
$(document).ready(function () {
    $.ajax({
        method: 'get',
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

    $('#tablePerson').on('click', 'tr', function () {
        var data = $('#tablePerson').DataTable().row( this ).data()
        $("#updateModal").find('#idmodal').val(data["id"])
        $("#deleteModal").find('#idmodal').val(data["id"])
        $("#updateModal").find('#modalname').val(data["nome"])
        $("#updateModal").find('#modalcpf').val(data["cpf"])
        $('#updateModal').modal("show");
        console.log(data)
    });

})

function deleteModal(){
    $('#updateModal').modal('hide');
    $('#deleteModal').modal('show')

}
function closeModal(){
    $('#updateModal').modal('hide');
    $('#deleteModal').modal('hide')
}
