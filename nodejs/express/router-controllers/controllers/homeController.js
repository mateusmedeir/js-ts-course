exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    Another field: <input type="text" name="anotherfield">
    <button>Send Form</button>
    </form>
    `);
};

exports.receiveForm = (req, res) => {
    res.send(req.body);
};