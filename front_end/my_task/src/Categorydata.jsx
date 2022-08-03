import React, { useState, useEffect } from "react";


const Categorydata = () => {
    const [category_name, setName] = useState("");
    const [parent, setParent] = useState(undefined);
    const [fetchPId, setFetchPId] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/fetchCategory")
            .then((res) => res.json())
            .then((data) => {
                setFetchPId(data);
            });
    }, []);

    const postData = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/categoryDetail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*",
            },
            body: JSON.stringify({
                category_name,
                parent,
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

    return (
        <div className="my-5">
            <h1 className="text-center">Add Categories</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form method="POST" onSubmit={postData}>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="category_name"
                                    value={category_name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Parent
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="parent"
                                    defaultValue=""
                                    onChange={(e) => setParent(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select Parent category
                                    </option>
                                    {fetchPId.map(
                                        (item) =>
                                            item.parent === null &&
                                            (
                                                <option key={item._id} value={item._id}> {item.category_name}
                                                </option>
                                            )
                                    )}
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" >AddCategory</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorydata;