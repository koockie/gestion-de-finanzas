const usersData = requiere ('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/users.json')

//funcion para registro de usuario
exports.registroUser = (input,response) => {

    input = input.toLowerCase()
    usersData.push(input)

}
