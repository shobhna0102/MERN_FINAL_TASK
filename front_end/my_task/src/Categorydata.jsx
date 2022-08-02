// import React, { useEffect, useState } from "react";
// const CatForm = () => {
//     const [name, setName] = useState("");
//     const [parent, setParent] = useState(undefined);
//     const [fetchPId, setFetchPId] = useState([]);
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         if (name.trim() === "") {
//             resetHandler();
//             return alert("Empty name cannot be added please try again");
//         }
//         const response = await fetch("http://localhost:5000/api/fetchCategoryName", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name,
//                 parent,
//             }),
//         });
//         if (response.ok) {
//             console.log("success");
//             alert("Added");
//             window.location.reload();
//         } else {
//             console.log(response.error);
//             alert("error");
//         }
//     };
//     const resetHandler = () => {
//         setName("");
//         setParent("");
//     };
//     useEffect(() => {
//         fetch("http://localhost:5000/api/fetchCategoryName")
//             .then((res) => res.json())
//             .then((data) => {
//                 setFetchPId(data);
//             });
//     }, []);
//     return (
//         <form style={{ width: "60%", margin: "auto" }} onSubmit={submitHandler}>
//             <div autoComplete="off" className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Enter name"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <div autoComplete="off" className="form-group">
//                 <label htmlFor="name">Parent</label>
//                 <select
//                     className="form-select"
//                     id="parent"
//                     defaultValue=""
//                     onChange={(e) => setParent(e.target.value)}
//                 >
//                     <option value="" hidden>
//                         Select Parent category
//                     </option>
//                     {fetchPId.map(
//                         (item) =>
//                             item.parent === null &&
//                             (
//                                 <option key={item._id} value={item._id}>
//                                     {item.name}
//                                 </option>
//                             )
//                     )}
//                 </select>
//             </div>
//             <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ margin: "20px 0px" }}
//             >
//                 Submit
//             </button>
//             <button
//                 type="button"
//                 className="btn btn-outline-danger"
//                 style={{ margin: "20px 10px" }}
//                 onClick={() => resetHandler()}
//             >
//                 Cancel
//             </button>
//         </form>
//     );
// };
// export default CatForm;

import React, { useState } from "react";



function Categorydata()
const [name, setName] = useState("");
const [parent, setParent] = useState(undefined);
const [fetchPId, setFetchPId] = useState([]);

const postData = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
        resetHandler();
        return alert("Empty name cannot be added please try again");
    }
    const response = await fetch("http://localhost:5000/api/fetchCategoryName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: JSON.stringify({
            name,
            parent,
        }),
    });
    if (response.ok) {
        console.log("success");
        alert("Added");
        window.location.reload();
    } else {
        console.log(response.error);
        alert("error");
    }
};


// const postData = (e) => {
//     e.preventDefault();
//     const { category_name, parent, } = data;
//     fetch("/api/categoryDetail",
//         {
//             method: "POST", headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ category_name, parent })
//         })
//         .then((response) => response.json())
//         .catch((error) => { console.log("Error", error) })


// const result = await res.json();
// if (!result) {
//     window.alert("caregory does not add")
// } else {
//     window.alert("category added successfully......")
// }





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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="fNameorm-label">
                                Parent
                            </label>
                            <select
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="parent"
                                value={data.parent}
                                onChange={(e) => setParent(e.target.value)}
                                placeholder="Enter Parent Category"
                            >
                                <option value="" hidden>
                                    Select Parent category
                                </option>
                                {fetchPId.map(
                                    (item) =>
                                        item.parent === null &&
                                        (
                                            <option key={item._id} value={item._id}> {item.name}
                                            </option>
                                        )
                                )}
                            </select>

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


export default Categorydata;