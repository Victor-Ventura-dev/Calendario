window.onload = function()
{

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let esteAno = new Date().getFullYear();
    let bisiesto = esteAno % 4 == 0 && esteAno % 100 != 0 ? true :false ;
   
    let creaMes = {nombre:"", dias:[]};
    let ano = new Array();
    let container = document.getElementById("home");
    let cont = 0;

    let cerrar = document.getElementById("close");
    cerrar.onclick = () => cerrarModal();

    meses.forEach(mes => {
            nuevoMes(mes);
        
            dias.forEach(dia => {
                creaBisiesto(bisiesto, mes, dia);
            });
       
            creaMes.dias.forEach(dia => {
                crearDias(dia, mes);
            });

            creaBotones(mes);

            guardaMes(creaMes);

            creaMes.nombre = "";
            creaMes.dias = [];
    });

    console.log(ano);
    
    function nuevoMes (mes) 
    {
        let nuevoMes = document.createElement("div");
        container.appendChild(nuevoMes);
        nuevoMes.className ="mes";
        nuevoMes.id = "mes"+mes;
        let titular = document.createElement("section");
        document.getElementById("mes"+mes).appendChild(titular);
        titular.id = "titular"+mes;
        titular.className = "titular";
        let titulo = document.createElement("h1");
        document.getElementById("titular"+mes).appendChild(titulo);
        titulo.className = "titulo"
        titulo.innerHTML = mes;
        let contenido = document.createElement("div");
        document.getElementById("mes"+mes).appendChild(contenido);
        contenido.id = "contenido"+mes;
        contenido.className ="content";
        let calendario = document.createElement("div");
        document.getElementById("contenido"+mes).appendChild(calendario);
        calendario.className = "calendarGrid";
        calendario.id = "calendario"+mes
    }
   
    
    
    function creaBisiesto(bisiesto, mes, dia)
    {
        if(bisiesto)
        {
            if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre")
            {
                creaMes.nombre = mes;
                creaMes.dias.push(dia);
                if(dia == 31)
                {
                    creaMes.dias.pop()
                }
                            
            }
            else if(mes != "Febrero")
            {
                creaMes.nombre = mes;
                creaMes.dias.push(dia);
            }
            else
            {
                creaMes.nombre = mes;
                creaMes.dias.push(dia);
                if(dia == 30 || dia == 31 )
                {
                    creaMes.dias.pop()
                }
            }
        }
        else
        {
            if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre")
                {
                        creaMes.nombre = mes;
                        creaMes.dias.push(dia);
                        if(dia ==31)
                        {
                            creaMes.dias.pop()
                        }
                }
                else if(mes != "Febrero")
                {
                        creaMes.nombre = mes;
                        creaMes.dias.push(dia);
                }
                else
                {
                    creaMes.nombre = mes;
                    creaMes.dias.push(dia);
                    if(dia == 29 || dia == 30 || dia == 31 )
                    {
                        creaMes.dias.pop()
                    }
                }
        }
    }
  
    function crearDias(dia, mes)
    {
        cont++;
                
        let cajaNumero = document.createElement("article");
        cajaNumero.className = "cajaNumero"
        cajaNumero.id = "caja"+cont;
        document.getElementById("calendario"+mes).appendChild(cajaNumero);

        let numeroDia = document.createElement("article");
        numeroDia.className = "dia";
        numeroDia.innerHTML = dia;
                
        var caja = document.getElementById(cajaNumero.id);
        caja.appendChild(numeroDia);
        caja.onclick = () => seleccionar(caja.id);
        
    }
   
    function creaBotones(mes)
    {
        let cajaBaja = document.createElement("article");
        cajaBaja.className = "cajaNumero"
        cajaBaja.id = "cajaButton"+cont;
        document.getElementById("calendario"+mes).appendChild(cajaBaja);

        let buttonBaja = document.createElement("article");
        buttonBaja.className = "buttonBaja";
        buttonBaja.innerHTML = "Personalizar Colores";
        buttonBaja.onclick = () => arbirModal();
        document.getElementById(cajaBaja.id).appendChild(buttonBaja)
    }

    function guardaMes(creaMes)
    {
        let name = creaMes.nombre;
        let days = creaMes.dias;
        let mesNuevo = {nombre:name, dias:days};

        ano.push(mesNuevo);
    }

    function seleccionar(id)
    {
       if(document.getElementById(id).className == "baja")
       {
        document.getElementById(id).className = "cajaNumero"
       }
       else
       {
        document.getElementById(id).className = "baja"
       }
    }

    function arbirModal()
    {
        document.getElementById("ventanaModal").style.display = "grid";
    }

    function cerrarModal()
    {
        document.getElementById("ventanaModal").style.display = "none";
    }
}
