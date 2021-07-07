exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JACK',
      age: 85,
      email: 'cjsend4686@snu.ac.kr'
    })
  }
}