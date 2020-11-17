using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using Grpc.Server;

namespace Grpc.Client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);
            var channel = GrpcChannel.ForAddress("http://localhost:5007");
            var client = new Greeter.GreeterClient(channel);

            var response = await client.SayHelloAsync(new HelloRequest { Name = "from net core console app" });

            Console.WriteLine(response.Message);
        }
    }
}