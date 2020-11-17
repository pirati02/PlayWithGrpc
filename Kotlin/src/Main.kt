import io.grpc.ManagedChannelBuilder

class Main {
    fun main(){
        val channel = ManagedChannelBuilder.forAddress("localhost", 5007).usePlaintext(true).build()

    }
}