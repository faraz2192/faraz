const ProductList=()=>{

let[prodarr,setprodarr]=useState([]);


    const renderlist=()=>{
        return prodarr.map((product)=>{
           return <tr key={product.prodid}><td>{product.prodid}</td> <td>{product.prodname}</td><td>{product.prodprice}</td> </tr>
        }

        )
    };
    return(
        <div>
            <table>
                <thead>
                <tr><th>Product Id</th><th>Product name</th><th>Product cost</th></tr>
                </thead>
                <tbody>
                    {renderlist()}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;