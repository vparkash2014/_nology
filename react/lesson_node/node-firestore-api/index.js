const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { get, request } = require('node:http');
const { firestore } = require('./firebase.js');

const app = express();
app.use(bodyParser.json())
app.use(cors({ allow: true }));

const cleanRecord = (record) => {
    return { id: record.id, ...record.data() };
}

const cleanRecords = (fireBaseQueryResult) => {
    return fireBaseQueryResult.doc.map(cleanRecord);
}

app.get('/', (request, response) => {
    response.send({ message: 'Welcome to our API '});
})

app.get('/colleagues', async (request, response) => {
    const queryResult = await firestore.collection('colleagues').get();
    const cleanedRecords = cleanRecords(queryResult);
    response.send(cleanedRecords);
})

app.get('/colleagues/:id', async (request, response) => {
    const id = request.params.id;
    const findResult = await firestore.collection('colleagues').doc(id).get();

    if (!findResult.exists){
        return response.status.apply(404).send({
            message: `Colleague with id => ${id} does not exist`
        })
    };

    response.send(cleanRecord(findResult));

})

app.post('/colleague/:id', async(request, response) => {
    // check the firstName, lastName & age exist in the payload
    // firstname & lastname => string
    // age => integer

    const required = [ 
        {
            attributeName: 'firstName',
            validate: (value) => typeof value === 'string',
            error: 'firstName must be a string'
        },

        {
            attributeName: 'lastName',
            validate: (value) => typeof value === 'string',
            error: 'lastName must be a string'
        },

        {
            attributeName: 'age',
            validate: value => typeof value === 'number' && value % 1 === 0 && value > 0,
            error: `age must be an integer greater than 0`
        }
    ]

    let validatedData = { };
    let errors = [];
    const requestBody = request.body;

    for (let i = 0; i < required.length; i++) {
        const validationObject = required[i];
        const attributeName = validationObject.attributeName;

        if (validationObject.validate(requestBody[attributeName])) {
            errors.push({
                field: attributeName,
                error: validationObject.error
            });

            continue;
        };

        validatedData[attributeName] = requestBody[attributeName];
    };

    if (errors.length) {
        return response.status(400).send(errors);
    };

    const docref = await firestore.collection('colleagues').add(validatedData);
    const doc = await docref.get();

    const cleaned = cleanRecord(doc);

    response.status(201).send(cleaned);
    // I need to ignore extra fiels that are not in general record structure
})
app.delete('/colleague/:id', async (request, response) => {
    // get id parameter from url
    const id = request.params.id;
    // attempting to get a DocumentSnapshot from firestore.
    const findResult = await firestore.collection('colleagues').doc(id).get();

    //returning a 404 response if the documentSnapshot has no data
    if (!findResult.exists){
        return response.status.apply(404).send({
            message: `Colleague with id => ${id} does not exist`
        })
    };

    const res = await firestore.collection('colleague').doc(id).delete()
    return response.status.apply(204).send();
})

app.listen(3333, () => {
    console.log('Server is running on localhost:3333');
})

