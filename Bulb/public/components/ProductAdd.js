const ProductAdd = () => {
    

    const addData=()=>{
        ProductService.addProduct{prodob}
    }

    return (
        <div>

            <form>
                <div className="form-group">
                    <label htmlFor="prodid"></label>
                    <input type="email" className="form-control" id="prodid" placeholder="enter product id"/>
                </div>
                <div className="form-group">
                    <label htmlFor="prodname"></label>
                    <input type="email" className="form-control" id="prodname" placeholder="enter product name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="prodcost"></label>
                    <input type="email" className="form-control" id="prodcost" placeholder="enter product cost"/>
                </div>
                
                <button type="button" className="btn btn-default" onClick={addData}>Add product</button>
                
            </form>

        </div>
    )


}