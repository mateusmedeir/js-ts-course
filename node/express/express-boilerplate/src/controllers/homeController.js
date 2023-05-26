exports.homePage = (req, res) => {
    res.render('index', {
        pageTitle: 'Home',
        title: 'This will be the <span style="color: red">title</span> of the page',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
    return;
};