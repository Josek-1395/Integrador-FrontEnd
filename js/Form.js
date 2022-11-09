function resumen(){
    const valor_ticket_inicial = 200;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = descuento(document.getElementById("categoria").value);
    let valor_tickets = valor_ticket_inicial * cantidad * ( 1 - categoria);
    document.getElementById("valor-final-tickets").placeholder = "Total a pagar: $" + valor_tickets.toFixed(2);
}
function descuento(x){
    const descuento_estudiante = 0.8;
    const descuento_trainee = 0.5;
    const descuento_junior = 0.15;
    if(x==1){return(descuento_estudiante);}
    if(x==2){return(descuento_trainee);}
    if(x==3){return(descuento_junior);}
}
function borrar(){
    document.getElementById("valor-final-tickets").placeholder = "Total a pagar: $";
}