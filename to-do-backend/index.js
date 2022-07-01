const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())





const uri = "mongodb+srv://outhshad-digital-media:RbYQZE55c4R9LLQ3@cluster0.vz35n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const toDoCollection = client.db("allToDo").collection("toDo");
        const userCollection = client.db("users").collection("user");


        // to-do app for ielts company
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            console.log(filter)
            const options = { upsert: true };
           const detail = req.body;

            const updateDoc = {
                $set: {
                    userName: detail.userName,
                    password: detail.password
                },
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })
        app.get('/user', async (req, res) => {
            const user = await userCollection.find().toArray();
            res.send(user)
        })

        app.post('/createToDo', async (req, res) => {
            const toDoDetail = req.body;
            console.log('toDoDetail', toDoDetail)
            const result = await toDoCollection.insertOne(toDoDetail);
            res.send(result)
        })
        
        app.delete('/deleteToDo/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: ObjectId(id) };
            const result = await toDoCollection.deleteOne(query);
            res.send(result)
        })
        app.put('/finishTask/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            console.log(filter)
            const options = { upsert: true };
           
            const updateDoc = {
                $set: {
                    finishTask: 'saved'
                },
            };
            const result = await toDoCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })
        app.get('/allToDo', async (req, res) => {
            const allToDo = await toDoCollection.find().toArray();
            res.send(allToDo)
        })
       
    }
        finally { }
    }

run().catch(console.dir())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})