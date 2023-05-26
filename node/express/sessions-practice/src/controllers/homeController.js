exports.homePage = (req, res) => {
    // req.session.user = { name: 'Mateus', loggedIn: true },
    /* req.flash('info', 'Hello World');
    req.flash('error', 'asdasd');
    req.flash('success', 'TESSSSSTTT'); */
    console.log(req.session.user);
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
    return;
};