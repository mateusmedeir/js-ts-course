/* const HomeModel = require('../models/HomeModel');

HomeModel.create({
    title: 'Another test title',
    description: 'Another test description.'
})
.then(data => console.log(data))
.catch(error => console.log(error)); */

exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
    return;
};