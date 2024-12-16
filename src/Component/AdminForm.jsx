// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Form } from "react-bootstrap";
// import { MdDateRange, MdOutlineSubtitles } from "react-icons/md";
// import { TbFileDescription } from "react-icons/tb";
// import { ImFilePicture } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// function AdminForm() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [date, setDate] = useState("");
//     const [imageUrl, setImageUrl] = useState("");
//     const [Loader, setLoader] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // await axios.post("http://localhost:5000/api/data", {
//             await axios.post("https://admindb-indol.vercel.app/api/data", {
//                 title,
//                 description,
//                 date,
//                 imageUrl,
//             });
//             Swal.fire({
//                 icon: "success",
//                 title: "Data added successfully!",
//                 // position: "top-end",
//                 // toast: true,
//                 showConfirmButton: false,
//                 timer: 1500,
//             }).then(() => {
//                 navigate("/manage-data");
//             });
//         } catch (error) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Failed to add data",
//             });
//         }
//     };

//     const handleImageChange = async (e) => {
//         // const file = e.target.files[0];
//         // if (file) {
//         //     const reader = new FileReader();
//         //     reader.onloadend = () => {
//         //         setImageUrl(reader.result);
//         //     };
//         //     reader.readAsDataURL(file);
//         // }
//         const file = e.target.files[0];
//         if (file) {
//             const formData = new FormData();
//             formData.append("image", file);
//             setLoader(true)

//             try {
//                 const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
//                     params: {
//                         key: "c7ccbf489e4b3b55f9d2366d818d5515", // Replace with your API key
//                     },
//                 });
//                 const { data } = response.data;
//                 setImageUrl(data.url); // Short URL provided by ImgBB
//                 console.log(data.url);
//                 setLoader(false)

//             } catch (error) {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Image upload failed",
//                 });
//                 console.log("error");

//             }
//         }
//     };

//     return (
//         <>
//             {/* {Loader 
//                 ?
//                 <div className="vh-100">
//                     <img src={require('../assets/Image/bg_image-transformed.avif')} alt="not found" height={300} width={300} className="m-auto" />
//                 </div>
//                 :  */}
//             <div>
//                 <h2 className="text-center fw-bold pt-5 pb-3 pt-lg-0 pb-lg-0">Add New Blog Data</h2>
//                 <div className="form-card py-0 px-0 py-lg-3 px-lg-5">
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="tittle">
//                             <Form.Label className="form-label fw-bold">
//                                 <MdOutlineSubtitles className="fs-5" /> Blog Title
//                             </Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 placeholder="Enter Title"
//                                 className="form-input border border-1 border-secondary p-2"
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="date" className="mt-4">
//                             <Form.Label className="form-label fw-bold">
//                                 <MdDateRange className="fs-5" /> Date
//                             </Form.Label>
//                             <Form.Control
//                                 type="date"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 className="form-input border border-1 border-secondary p-2"
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="description" className="mt-4">
//                             <Form.Label className="form-label fw-bold">
//                                 <TbFileDescription className="fs-5" /> Blog Detail
//                             </Form.Label>
//                             <Form.Control
//                                       as="textarea"
//                                       rows={8}
//                                       cols={60}
                              
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                                 placeholder="Enter blog detail"
//                                 className="form-input border border-1 border-secondary"
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="picture" className="mt-4">
//                             <Form.Label className="form-label fw-bold">
//                                 <ImFilePicture className="fs-5 " /> Picture <span>(1000px x 900px)</span>
//                             </Form.Label>
//                             <Form.Control
//                                 type="file"
//                                 onChange={handleImageChange}
//                                 className="form-input border border-1 border-secondary p-2"
//                             />
//                         </Form.Group>

//                         <Button
//                             variant="primary"
//                             type="submit"
//                             className="mt-5 w-100 p-3 gradient-btn border-none text-white fw-bold"
//                         >
//                             SUBMIT
//                         </Button>
//                     </Form>
//                 </div>
//                 <div className={Loader ? "vh-100 w-100 top-0 start-0 translate-middle bg-dark loadershow" : "d-none"}>
//                     <img src={require('../assets/Image/bg_image-transformed.avif')} alt="not found" height={"100vh"} width={"100%"} />
//                 </div>
//             </div>
//             {/* } */}
//         </>
//     );
// }

// export default AdminForm;

import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { MdDateRange, MdOutlineSubtitles } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AdminForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [selectedImageName, setSelectedImageName] = useState(""); // New state for file name
    const [Loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://admindb-indol.vercel.app/api/data", {
                title,
                description,
                date,
                imageUrl,
            });
            Swal.fire({
                icon: "success",
                title: "Data added successfully!",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                navigate("/manage-data");
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed to add data",
            });
        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImageName(file.name); // Save the file name to display it
            const formData = new FormData();
            formData.append("image", file);
            setLoader(true); // Show loader when image upload starts

            try {
                const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
                    params: {
                        key: "c7ccbf489e4b3b55f9d2366d818d5515", // Replace with your API key
                    },
                });
                const { data } = response.data;
                setImageUrl(data.url); // Short URL provided by ImgBB
                console.log(data.url);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Image upload failed",
                });
                console.error(error);
            } finally {
                setLoader(false); // Hide loader after the image upload completes
            }
        }
    };

    return (
        <>
            {Loader && (
                <div className="loadershow">
                    <img
                        src={require("../assets/Image/c7e1b7b5753737039e1bdbda578132b8.gif")}
                        alt="Loading..."
                        height={300}
                        width={300}
                        className="img-fluid object-fit-cover"
                    />
                </div>
            )}
            {!Loader && (
                <div>
                    <h2 className="text-center fw-bold pt-5 pb-3 pt-lg-0 pb-lg-0">Add New Blog Data</h2>
                    <div className="form-card py-0 px-0 py-lg-3 px-lg-5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label className="form-label fw-bold">
                                    <MdOutlineSubtitles className="fs-5" /> Blog Title
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter Title"
                                    className="form-input border border-1 border-secondary p-2"
                                />
                            </Form.Group>

                            <Form.Group controlId="date" className="mt-4">
                                <Form.Label className="form-label fw-bold">
                                    <MdDateRange className="fs-5" /> Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="form-input border border-1 border-secondary p-2"
                                />
                            </Form.Group>

                            <Form.Group controlId="description" className="mt-4">
                                <Form.Label className="form-label fw-bold">
                                    <TbFileDescription className="fs-5" /> Blog Detail
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    cols={60}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter blog detail"
                                    className="form-input border border-1 border-secondary"
                                />
                            </Form.Group>

                            <Form.Group controlId="picture" className="mt-4">
                                <Form.Label className="form-label fw-bold">
                                    <ImFilePicture className="fs-5" /> Picture <span>(1000px x 900px)</span>
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={handleImageChange}
                                    className="form-input border border-1 border-secondary p-2"
                                />
                                {selectedImageName && (
                                    <p className="mt-2 text-secondary">Selected file: {selectedImageName}</p>
                                )}
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-5 w-100 p-3 gradient-btn border-none text-white fw-bold"
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AdminForm;
