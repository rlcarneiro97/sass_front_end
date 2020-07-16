var banco = openDatabase('bdCoronaNews', '1.0', 'contato para possiveis infectados', 2 * 1024 * 1024);

banco.transaction(function(tx){
    // tx.executeSql('drop table pessoa')
    tx.executeSql('create table if not exists pessoa (nome, idade, cpf unique, email, endereco)')
})

function inserirNaTabela(){

    var nome = document.getElementById('nome').value; 
    var idade = document.getElementById('idade').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;

    banco.transaction(function(tx){
        var query = 'insert into pessoa (nome, idade, cpf, email, endereco) values("'+nome+'", '+idade+', "'+cpf+'", "'+email+'", "'+endereco+'")'
        tx.executeSql(query)
        alert("Dados inseridos com sucesso!")
        window.location.href = "contato.html";
    })

}

function abrirModal(){
    // alert('dale');
    var obj = document.querySelector(".modal");
    obj.classList.add("active");
}

function fecharModal(){
    var obj = document.querySelector(".modal");
    obj.classList.remove("active");
    // var verifica = alert('dele');
}

//parallax
$(function(){
    var $obj = $('#banner')
    $(window).scroll(function(){
        var yPos = -($(window).scrollTop() / 3.5)
        var bgpos = "0 " + yPos + 'px'
        $obj.css('background-position', bgpos )
    })
})