const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000;
const users = [
    { id: 0, name: "mbdhf", email: "rejaulkarim470@gmail.com", phone: "050455" },
    { id: 1, name: "Rejaul", email: "rejaulkarim470@gmail.com", phone: "050455" },
    { id: 2, name: "karim", email: "rejaulkarim470@gmail.com", phone: "050455" },
    { id: 3, name: "shohag", email: "rejaulkarim470@gmail.com", phone: "050455" },
    { id: 4, name: "Mahabub", email: "rejaulkarim470@gmail.com", phone: "050455" },
];

app.get('/', (req, res) => {
    res.send('Hello Mohammad Rejaul karim shohag')
});
//post method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(result);
    } else {
        res.send(users)
    }

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});
app.listen(port, () => {
    console.log("Listening on port", port)
});