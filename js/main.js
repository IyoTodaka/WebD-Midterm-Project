//読み込み時のData呼び出し
const GET_URL = "https://jsonblob.com/api/jsonBlob/1028906421840003072"
const cart_item_template = document.querySelector("#cart_item_template")
const cart = document.querySelector("#cart")
const total_price_el = document.getElementById("total_price")
const total_counter_el = document.getElementById("total_counter")
let total_counter = 0

let itemList;
axios.get(GET_URL).then(({data})=>{
   itemList = data.items;
   console.log(itemList);
   //itemListにObject型のDataが格納される
})

function OnLinkClick(id){
    if(window.confirm('are you sure to buy?')){
        
        target = document.getElementById("cart")
        const item = findItemById(id)
        if(existInCart(item.item_id)){
            const target_item = cart.children.namedItem(id)
            const counter = target_item.querySelector("#count").textContent
            const total_price = total_price_el.textContent
            target_item.querySelector("#count").innerHTML=parseInt(counter)+1
            total_price_el.innerHTML = parseInt(total_price)+parseInt(item.price)
            total_counter +=1
            total_counter_el.innerHTML =total_counter
        }else{
        
            const cart_item_clone = document.importNode(cart_item_template.content, true);
            cart_item_clone.querySelector("h4").textContent = item.name.toUpperCase();
            cart_item_clone.getElementById("price").textContent = item.price;
            cart_item_clone.querySelector("li").id = item.item_id;
            cart_item_clone.querySelector("img").src= item.img_path;
            cart_item_clone.querySelector("#count").textContent= 1;
            cart_item_clone.querySelector("#deleteIcon").href= "javascript:deleteItem("+item.item_id+");";
            
            cart.insertBefore(cart_item_clone,cart.firstChild)
            const total_price = total_price_el.textContent
            total_price_el.innerHTML = parseInt(total_price)+parseInt(item.price)
            total_counter +=1
            total_counter_el.innerHTML =total_counter
        } 
    }
}
function existInCart(item_id){
    if(cart.children.namedItem(item_id)){
        return true
    }
    return false
}

function findItemById(itemId){
    for(item of itemList){
        if(item.item_id == itemId){
            return item

        }
    }


function deleteItem(itemId){
   const target_item = cart.children.namedItem(itemId)
   const target_price = target_item.querySelector("#price").textContent
   const target_count = target_item.querySelector("#count").textContent
   const total_price = total_price_el.textContent
   total_price_el.innerHTML =parseInt(total_price) - target_price * target_count
   total_counter -= parseInt(target_count)
   total_counter_el.innerHTML = total_counter
   target_item.remove()   

}