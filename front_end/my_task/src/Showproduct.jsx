
import React, { useEffect, useState } from "react";



const Showcategory = () => {
    const [showProduct, setshow] = useState([]);

    console.log(showProduct);
    const fetchData = () => {
        fetch("http://localhost:5000/api/fetchProduct")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setshow(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (id) => {
        console.log("id", id)
        const response = await fetch(`http://localhost:5000/api/deleteProduct?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*",
            },
        })
        if (response.ok) {
            console.log("success");
            alert(" Delete this record");
            window.location.reload();
        } else {
            console.log(response);
            alert("error");
        }
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ProductName</th>
                        <th scope="col">Description</th>
                        <th scope="col">price</th>
                        <th scope="col">images</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {console.log("showCat -----", showProduct)}
                    {showProduct && showProduct.length > 0 && (


                        showProduct.map((shows, index) => (

                            <tr key={index}>
                                <td >{shows.product_name}</td>
                                <td >{shows.description}</td>
                                <td >{shows.price}</td>
                                {/* <td >{shows.image}</td> */}

                                <td style={{ padding: "2%" }}><button style={{ color: "white", background: "green" }}>Edit</button>
                                    <button style={{ color: "white", background: "red" }} onClick={() => deleteData(shows._id)}>Delete</button>
                                </td>

                            </tr>
                        ))


                    )}
                </tbody>

            </table>
            <div></div>
        </>
    );
};
export default Showcategory;