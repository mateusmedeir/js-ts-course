exports.homePage = (req, res) => {
    res.render('index');
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
};