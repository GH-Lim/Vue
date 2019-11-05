// 외부에 요청을 보내서 그 결과를 출력하는 코드를 작성하고 자 한다.
// 1. 몇 초 뒤에 데이터가 응답되면
// 2. 데이터를 변수에 저장하여 출력!
// 

// function getData() {
//   let data

//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     data = {'data': 'somedata'}
//   }, 100);

//   return data
// }

// function printData() {
//   let response1 = getData()
//   console.log(response1)
// }

// printData()

// function getDataCallback(callback) { // 2. callback 으로 함수가 넘어옴. 즉, callback = 익명함수
//   setTimeout(() => {
//     console.log('Info: Send Request.')
//     const data = {'data': 'somedata'}
//     callback(data) // 3. 다 끝나고 저 함수(익명함수)를 실행
//   }, 100)
// }

// // 1. 출력하는 작업을 하는 함수를 인수로 넘김
// getDataCallback(function(data) {
//   console.log(data)
// })


// 1. 다짐을 반환한다.
// 2. 어떤 다짐? ==> 데이터를 요청한 뒤 어떻게 할거야! // Promise 안쪽의 함수에 표현한다.
function getDataPromise() { // === axios.get(DATA_URL)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('INFO: 요청을 보냈습니다.')
      const data = {'data': 'somedata'}
      resolve(data) // .then 으로 꺼낼 수 있는 객체
    }, 100)
  })
}

// getDataPromise()
//   .then(response => {
//     console.log(response)
//     console.log(1)
//     return response.data
//   })
//   .then(data => {
//     console.log(data)
//     console.log(2)
//   })
//   .then(() => {
//     console.log(3)
//   })
//   .catch(error => {
//     console.error(error)
//   })

const handleData = async function() { // 이 함수에서는 동기적으로 동작하게 할거야
  const response = await getDataPromise() // 기다리지 않고 바로 반환 받아서 쓸거야
  console.log(response)
}

handleData()