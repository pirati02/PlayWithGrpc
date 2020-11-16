const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');
const util = require('util');
const Promise = require('bluebird');

const PROTO_PATH = '../Grpc.ProtoContracts/Protos/greet.proto'

const loadedProto = protoLoader.loadSync(PROTO_PATH);
const greetPackageDefinition = grpc.loadPackageDefinition(loadedProto).greet;
const client = new greetPackageDefinition.Greeter('dns:localhost:5007', grpc.credentials.createInsecure());
  
Promise.try(() => { 
    return client.sayHello({
        name: 'from nodejs'
    }, function(err, feature) {
         console.log({
             err,
             feature
         })
    });  
})
    .then(console.log) 
.catch(console.log)