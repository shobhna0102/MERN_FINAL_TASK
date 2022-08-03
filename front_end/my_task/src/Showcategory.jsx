import React, { useEffect, useState } from "react";



const Showcategory = () => {
    const [showCat, setshow] = useState([]);

    console.log(showCat);
    const fetchData = () => {
        fetch("http://localhost:5000/api/fetchCategory")
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
        const response = await fetch(`http://localhost:5000/api/deleteCategory?id=${id}`, {
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
                        <th scope="col">Categoryname</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {console.log("showCat -----", showCat)}
                    {showCat && showCat.length > 0 && (


                        showCat.map((shows, index) => (

                            <tr key={index}>
                                <td >{shows.category_name}</td>
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