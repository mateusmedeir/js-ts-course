exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
    return;
};