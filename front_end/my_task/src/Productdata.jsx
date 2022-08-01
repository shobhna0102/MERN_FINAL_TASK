

import React, { useState } from "react";



function Categorydata() {
    const [data, setData] = useState(
        {
            category_id: "",
            product_name: " ",
            price: " ",
            images: " ",
        });

    const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {

        setSelectedFile(event.target.files[0]);
        //setIsSelected(true);
    };
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value

            };
        });
    };
    const handleSubmission = () => {
    };
    const postData = (e) => {
        e.preventDefault();
        const { category_id, product_name, price, images } = data;
        fetch("/api/categoryDetail",
            {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ category_id, product_name, price, images })
            })
            .then((response) => response.json())


        // const result = await res.json();
        // if (!result) {
        //     window.alert("caregory does not add")
        // } else {
        //     window.alert("category added successfully......")
        // }

    }



    return (
        <div className="my-5">
            <h1 className="text-center">Add Product</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form method="POST">
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Category_id
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="category_id"
                                    value={data.category_id}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name"
                                />
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
                                    value={data.product_name}
                                    onChange={inputEvent}
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
                                    value={data.description}
                                    onChange={inputEvent}
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
                                    value={data.price}
                                    onChange={inputEvent}
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

export default Categorydata;
