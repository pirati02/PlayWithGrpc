const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

const PROTO_PATH = '../Grpc.ProtoContracts/Protos/greet.proto'

const loadedProto = protoLoader.loadSync(PROTO_PATH);
const greetPackageDefinition = grpc.loadPackageDefinition(loadedProto).greet;
const client = new greetPackageDefinition.Greeter('dns:localhost:5007', grpc.credentials.createInsecure());

return client.sayHello({
    name: 'from nodejs'
}, function(err, result) {
    console.log(result)
});  
