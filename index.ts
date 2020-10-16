import websocket from "websocket";

const client = new websocket.client({});

client.on("connect", (conn) => {
  console.log("connect");
  conn.on("message", (data) => {

    const buffer = data.binaryData!;
    buffer.swap16();
    var o = new Uint8Array(data.binaryData!);
    let p = Array(o.length);
    for (let e = 0; e < o.length; e++) {
      p[e] = String.fromCharCode(o[e])
    }
    p = p.join("") as any;
    console.log(p);

  });
});

client.connect("wss://ggproxy-14.gadu-gadu.pl");

console.clear();

console.log("ads");
