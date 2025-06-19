const perfilModel = require("../models/perfilModel");

//mostrar informações de perfil
exports.infoPerfil = async (req, res) => {
    try{
        const id_usuario = req.session.usuario.id_usuario;
        const perfil = await perfilModel.infoPerfil(id_usuario);
        res.status(201).json(perfil);
    }
    catch(err){
        res.status(500).json({err: 'Perfil não encontrado'});
    }
}