const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './viewsDrctry');

let numbers = ["Uno", "Dos", "Tres", 'Cuatro', 'Cinco', 'Seis'];
let anotherNumbers = ["One", "Two", "Three", 'Four', 'Five', 'Six'];
// This has been already completed
app.get('/', (req,res) => {
    res.render('indexTemplate', {title: 'Hey', message: 'Hello there',message2:'Hello here', list: numbers});
});
app.get('/another', (req,res)=>{
    res.render('indexTemplate',{ title:'Heii', message:'Hello again',list: anotherNumbers})
})
// You should implement a get request handler that should return the same index.pug
// rendered like in the previous lines of code. This should happen when the path is
// "/another", note that there is no file ending in there.
// The title should be the same, but the message should read "Hello again", and
// the list given to the template should be anotherNumbers.
app.listen(port, () => console.log(`Express app listening at http://localhost:${port}`));
