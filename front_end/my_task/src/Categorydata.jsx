
import React, { useState } from "react";



function Categorydata() {
    const [data, setData] = useState(
        {
            category_name: "",
            parent: "",
            createdAt: "",
            updatedAt: "",
        });


    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value

            };
        });
    };
    const postData = (e) => {
        e.preventDefault();
        const { category_name, parent, createdAt, updatedAt } = data;
        fetch("/api/categoryDetail",
            {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ category_name, parent, createdAt, updatedAt })
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
            <h1 className="text-center">Add Categories</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form method="POST">
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Category_Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="category_name"
                                    value={data.category_name}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Parent
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="parent"
                                    value={data.parent}
                                    onChange={inputEvent}
                                    placeholder="Enter Parent Category"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    CreatedAt
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="createdAt"
                                    value={data.createdAt}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Created Date"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    UpdatedAt
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="updatedAt"
                                    value={data.updatedAt}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Updated Date"
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" onClick={postData}>AddCategory</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorydata;
