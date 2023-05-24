const usersData = requiere ('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/users.json')
 

//es necesario hacer un getusers?
// deberia dejarlos con metodo post pensand en que usaremos la interfaz dsp? para complementar con html

//funcion que retorna lo importante de cada user para el login
exports.getUsersData = () => {
    let principalData = []
    usersData.users.forEach(element => {
        principalData.push({
            "email": element.users.email,
            "psw": element.users.psw
        })
    });
return principalData
}


//funcion para registro de usuario
exports.registroUser = (input,response) => {

    input = input.toLowerCase() 
    usersData.push(input) //agrego los datos de la entrada al archivo de usuarios

}

exports.loginUser = (input, response)=> [
    this.getUsersData().forEach()(data => {
        if((data['email'].toLowerCase()).includes(input) && (data['psw'].toLowerCase()).includes(input)){ //si estan el correo Y la clave en un usuario
            response.json('datos correctos')
            //se da paso al menú
        }
        else{
            response.json('datos incorrectos, inténtelo nuevamente')
        }
    })


]