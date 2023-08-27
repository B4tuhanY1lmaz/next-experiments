import net from "net";

var serverAddress = '92.205.17.6'
var serverPort = '25565'

function checkServerStatus() {
  const client = new net.Socket();

  try {
    console.log("Connecting server")
    client.connect(serverPort, serverAddress, () => {
      console.log("Server is up")
      client.end();
    })
  } catch (error) {
    console.log("there was an error" , error);
  }
}

export default async function Home() {
  const serverStatus = checkServerStatus()
  return (
    <>
      <div>
        <p>Minecraft Server ping testing.</p>
      </div>
    </>
  )
}
