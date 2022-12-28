class ProductService{
     constructor(){
        this.baseUrl="http://localhost:4000/";
     }

     getProduct(){
        return axios.get(this.baseUrl+"product");
     }

     addProduct(product){
        return axios.post(this.baseUrl+"product",product)
     }

     deleteProduct(id){
        return axios.delete(this.baseUrl+"product/"+id)
     }

     updateProduct(product){
        return axios.put(this.baseUrl+"product")
     }

}