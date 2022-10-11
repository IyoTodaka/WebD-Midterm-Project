//読み込み時のData呼び出し
const GET_URL = "https://jsonblob.com/api/jsonBlob/1028906421840003072"

const itemList = axios.get(GET_URL);
console.log(itemList);
