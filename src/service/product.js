import axios from 'axios';
import BASEURL from "../config";

const getProducts = async (params) => {
    let response = await axios.get(`${BASEURL}/products?${params}`)
    return response
}

const getProductWithID = async (id) => {
    let response = await axios.get(`${BASEURL}/products/${id}`)
    return response
}

export { getProducts, getProductWithID }
