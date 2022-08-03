

import React, { useState, useEffect } from "react";



const Productdata = () => {
    const [category_name, setName] = useState("");
    const [product_name, setProName] = useState("");
    const [description, setDesctiption] = useState("");
    const [price, setPrice] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [fetchPId, setFetchPId] = useState([]);
    // const [isFilePicked, setIsFilePicked] = useState(false);

    console.log(fetchPId);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        //setIsSelected(true);
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/fetchCategory")
            .then((res) => res.json())
            .then((data) => {
                setFetchPId(data);
            });
    }, []);





    const postData = async (e) => {
        e.preventDefault();
        const response = await fetch("http:localhost:5000/api/productAdd", {
            method: "POST",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "access-control-allow-origin": "*",
            },
            body: JSON.stringify({
                category_name,
                product_name,
                description,
                price,
                selectedFile
            }),
        });
        if (response.ok) {
            console.log("success");
            alert("Added");
            window.location.reload();
        } else {
            console.log(response);
            alert("error");
        }
    }

    const handleSubmission = () => {
    };
    return (
        <div className="my-5">
            <h1 className="text-center">Add Product</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form method="POST" onSubmit={postData}>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Category
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="parent"
                                    defaultValue=""
                                    onChange={(e) => setName(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select Parent category
                                    </option>
                                    {fetchPId.map(
                                        (item) =>

                                        (
                                            <option key={item._id} value={item._id}> {item.category_name}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Product_Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="product_name"
                                    value={product_name}
                                    onChange={(e) => setProName(e.target.value)}
                                    placeholder="Enter Parent Category"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDesctiption(e.target.value)}
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Enter Parent Category"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Images
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleFormControlInput1"

                                    onChange={changeHandler}
                                    placeholder="Enter Parent Category"
                                />
                                <button onClick={handleSubmission}>Upload</button>
                            </div>


                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" onClick={postData}>AddProduct</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdata;
