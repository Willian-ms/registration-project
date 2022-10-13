
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
                    {'data':'cpf'},
                    {'data':'email'},
                    {'data':'cep'},
                    {'data':'endereco'},
                    {'data':'numero'},
                    {'data':'cidade'},
                    {'data':'estado'}

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
        $("#deleteModal").find('#idmodal').val(data["id"])
        $("#updateModal").find('#idmodal').val(data["id"])
        $("#updateModal").find('#modalname').val(data["nome"])
        $("#updateModal").find('#modalcpf').val(data["cpf"])
        $("#updateModal").find('#modalemail').val(data["email"])
        $("#updateModal").find('#modalcep').val(data["cep"])
        $("#updateModal").find('#modaladdress').val(data["endereco"])
        $("#updateModal").find('#modalnumberAddress').val(data["numero"])
        $("#updateModal").find('#modalcity').val(data["cidade"])
        $("#updateModal").find('#modalstate').val(data["estado"])
        $('#updateModal').modal("show");
        console.log(data)
    });

    //Regex CPF
    document.getElementById('cpf').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '-' + x[4] + (x[5] ? '-' + x[5] : '');
      });

    document.getElementById('modalcpf').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '-' + x[4] + (x[5] ? '-' + x[5] : '');
      });
    
    //Regex CEP
    document.getElementById('cep').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);
      e.target.value = !x[2] ? x[1] : x[1] + '-' + x[2];
      });  
      
    document.getElementById('modalcep').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);
      e.target.value = !x[2] ? x[1] : x[1] + '-' + x[2];
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
