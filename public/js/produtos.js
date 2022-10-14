$(document).ready(function () {
  $.ajax({
      method: 'get',
      url: '/getProduto',
      datatype: 'json',
      success: function(response){
          $('#tableProduto').DataTable({
              columnDefs:[{
                  "targets":0,
                  "visivle": false
              }],
              data: response,
              columns:[
                  {'data':'id'},
                  {'data':'nome'},
                  {'data':'grupo'},
                  {'data':'peso'},
                  {'data':'unidade_medida'}
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

  $('#tableProduto').on('click', 'tr', function () {
    var data = $('#tableProduto').DataTable().row( this ).data()
    $("#deleteModal").find('#idModal').val(data["id"])
    $("#updateModal").find('#idModal').val(data["id"])
    $("#updateModal").find('#modalNome').val(data["nome"])
    $("#updateModal").find('#modalGrupo').val(data["grupo"])
    $("#updateModal").find('#modalPeso').val(data["peso"])
    $("#updateModal").find('#modalUn').val(data["unidade_medida"])
    $('#updateModal').modal("show");
    console.log(data)
  })


})

deleteModal = () => {
  $('#updateModal').modal('hide');
  $('#deleteModal').modal('show')
}

createModal = () =>{
  $('#createModal').modal('show')
}

closeModal = () => {
  $('#createModal').modal('hide')
  $('#updateModal').modal('hide');
  $('#deleteModal').modal('hide')
}
