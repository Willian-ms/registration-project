$(document).ready( function () {
    $('#tableCliente').DataTable();
} );

console.log('ta funcionando')


    /*
    // Setup - add a text input to each footer cell
    $('#tableCliente thead tr').clone(true).appendTo( '#tableCliente thead' );
    $('#tableCliente thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" style="width: 100%" placeholder="Filtrar"/>' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
    } );

    $('#tableCliente').DataTable( {
        ajax: {
        url: '/getEtapa',
        dataSrc: ''
        },
        "columnDefs":[{
            "targets":0,
            "visivle": false
        }],
        "columns": [
            { "data": "etapa" },
            { "data": "etapa_descricao"}
        ],
        "order": [[ 0, "desc" ]],
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
    } );

    var table = $('#tableCliente').DataTable();
    
    $('#tableCliente tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();

        setInterval( function () {
            table.ajax.reload( null, false ); // user paging is not reset on reload
        }, 30000 );

        var modal = $("#modalAlterarEtapa")
        $("#modalAlterarEtapa").find('.modal-title').text('Alterar registro')
        $("#modalAlterarEtapa").find('#etapaModal').val(data["etapa"])
        $("#modalAlterarEtapa").find('#etapaDescricaoModal').val(data["etapa_descricao"])
        
        get_dados_etapa(data['etapa'], data['etapa_descricao'])
        $("#modalAlterarEtapa").modal();
    });*/
