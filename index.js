// anotarse a clases de yoga
// primero declaro mi arreglo de clases existentes

const clasesDeYoga = [
    {clase: "Yoga Tradicional", precio: 3000},
    {clase: "Yoga Holística", precio: 4500},
    {clase: "Yoga Para Embarazadas", precio: 5000},
    {clase: "Yoga de la Respiración Azul", precio: 7000},
    {clase: "Meditación y Sanación Interna", precio: 6000}
]


// creo mi arreglo vacío, donde se guardarán todas las personas que estan en la clase

const genteEnLaClase = [ ];

// me paro en el formulario para agregar un evento a mi submit

let formularioYoga = document.getElementById("formularioYoga");



// añado un evento a mi submit
formularioYoga.addEventListener("submit", nuevoCliente);

// creo la función para que todo lo que el usuario ingrese, se guarde

function nuevoCliente (e) {
    e.preventDefault();

    // llamo a mis inputs
    let nombreNuevoCliente = document.getElementById("nombreNuevoCliente").value ;
    let apellidoNuevoCliente = document.getElementById("apellidoNuevoCliente").value ;
    let claseNuevoCliente = document.getElementById("claseNuevoCliente").value ;
    let mesesNuevoCliente = document.getElementById("mesesNuevoCliente").value ;

    const clienteNuevo ={
        nombreNuevoCliente : nombreNuevoCliente,
        apellidoNuevoCliente : apellidoNuevoCliente,
        claseNuevoCliente : claseNuevoCliente,
        mesesNuevoCliente : mesesNuevoCliente
    }

    // Si los datos son diferentes de vacío 

    if((nombreNuevoCliente.trim() != "" && apellidoNuevoCliente.trim() != "" && claseNuevoCliente.trim() != "" && mesesNuevoCliente.trim() != 1,3,6,9,12)){
        
        // pusheamos el nuevo objeto dentro del arreglo vacío que preparamos para ellos
        genteEnLaClase.push(clienteNuevo);
        
        // mostramos la confirmación para cliente 
        document.getElementById("espacioConfirmacionCliente").innerHTML = (`Enhorabuena! ${nombreNuevoCliente}
         ${apellidoNuevoCliente}, te has anotado en ${claseNuevoCliente} por ${mesesNuevoCliente} meses.`);
        
        // guardamos en el storage el arreglo con el nuevo objeto
        localStorage.setItem('genteEnLaClase', JSON.stringify(genteEnLaClase));

        // mostramos el arreglo en el lugar de gente en las clases
        const espacioGenteEnClase = document.getElementById('espacioGenteEnClase');
        genteEnLaClase.forEach(alumno =>{
            const infoAlumno = document.createElement('div');
            infoAlumno.innerHTML = `<p>Mi nombre es: ${alumno.nombreNuevoCliente} ${alumno.apellidoNuevoCliente}
                                       y voy a estar en la clase ${alumno.claseNuevoCliente} 
                                       por ${alumno.mesesNuevoCliente} meses.
                                       </p>`
            espacioGenteEnClase.appendChild(infoAlumno);
        })
    }else{
        document.getElementById("espacioConfirmacionCliente").innerHTML = ("Ups! Parece que tus datos no son correctos");
    }

}


