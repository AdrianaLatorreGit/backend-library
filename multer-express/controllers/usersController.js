const usersControllers = {
    registerUserView: (req, res) => {
        res.render('userRegister');
    },
    registerUser: (req, res) => {
        let {name, email} = req.body

        if(!req.file){
            res.status(422).send("Favor enviar uma foto de perfil")
        }
        // if(req.file.size > 3152){
        //     res.status(431).send("Favor enviar uma foto de perfil menor")
        // }
        // if(req.file.mimetype === "image/png" || req.file.mimetype === "image/jpg"){
        //     res.status(431).send("Favor enviar uma foto de perfil menor")
        // }

        res.send(`Usuário enviado com sucesso, nome: ${name} email: ${email}`)
    }
}

module.exports = usersControllers