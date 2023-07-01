import fetch from "node-fetch";

const getProducts = async function products(){
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    return await response.json();
}
  
export { getProducts };