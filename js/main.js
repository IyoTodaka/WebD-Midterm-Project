//読み込み時のData呼び出し
const GET_URL = "https://jsonblob.com/api/jsonBlob/1028906421840003072"

let itemList;
axios.get(GET_URL).then(({data})=>{
   itemList = data;
   console.log(itemList);
   //itemListにObject型のDataが格納される
})

function OnLinkClick(id){
    target = document.getElementById("cart")
    console.log(id)

    for(let item of itemList){
        if(item == id){
            console.log(id)
        }
    }

}