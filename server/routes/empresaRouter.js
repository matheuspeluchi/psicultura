const Empresa = require('../models/Empresa');
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    Empresa.find()
        .then(data=> res.status(200).send(data))
        .catch(err => res.status(500).send(err));
})

router.put('/',(req,res) => {
    delete req.body._id
    empresa = new Empresa(req.body);
    empresa.save()
        .then(data => res.status(200).send(data._id))
        .catch(err => {console.log(err),res.status(500).send(err)})

})


router.get('/:id',(req,res) => {
    Empresa.findById(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

router.post('/:id',(req,res) => {    
    Empresa.findOneAndUpdate({_id: req.params.id},req.body)
        .then(data =>{ res.status(200).send(data),console.log(data)})
        .catch(err => res.status(500).send(err))
})

module.exports = router;