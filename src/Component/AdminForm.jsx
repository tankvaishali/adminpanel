


// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Form } from "react-bootstrap";
// import { MdDatasetLinked, MdDateRange, MdOutlineSubtitles } from "react-icons/md";
// import { TbFileDescription } from "react-icons/tb";
// import { ImFilePicture } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// function AdminForm() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [date, setDate] = useState("");
//     const [imageUrl, setImageUrl] = useState("");
//     const [blogUrl, setBlogUrl] = useState("");
//     const [selectedImageName, setSelectedImageName] = useState(""); // New state for file name
//     const [Loader, setLoader] = useState(false);

//     const [formErrors, setFormErrors] = useState({
//         title: "",
//         description: "",
//         date: "",
//         blogUrl: "",
//         imageUrl: "",
//     });

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate form fields
//         const errors = validateForm();
//         if (Object.values(errors).some((error) => error)) {
//             setFormErrors(errors);
//             return;
//         }

//         try {
//             await axios.post("https://admindb-indol.vercel.app/api/data", {
//                 title,
//                 description,
//                 date,
//                 imageUrl,
//                 blogUrl,
//             });
//             Swal.fire({
//                 icon: "success",
//                 title: "Data added successfully!",
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

//     const validateForm = () => {
//         const errors = {};

//         // Title validation
//         if (!title) {
//             errors.title = "Title is required";
//         }

//         // Description validation
//         if (!description) {
//             errors.description = "Description is required";
//         }

//         // Date validation
//         if (!date) {
//             errors.date = "Date is required";
//         }

//         // Blog URL validation with regex pattern
//         const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9-]+(\/[^\s]*)?$/i;
//         if (!blogUrl) {
//             errors.blogUrl = "Blog URL is required";
//         } else if (!urlPattern.test(blogUrl)) {
//             errors.blogUrl = "Please enter a valid Blog URL";
//         }

//         // Image validation
//         if (!imageUrl) {
//             errors.imageUrl = "Image is required";
//         }

//         return errors;
//     };

//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedImageName(file.name); // Save the file name to display it
//             const formData = new FormData();
//             formData.append("image", file);
//             setLoader(true); // Show loader when image upload starts

//             try {
//                 const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
//                     params: {
//                         key: "c7ccbf489e4b3b55f9d2366d818d5515", // Replace with your API key
//                     },
//                 });
//                 const { data } = response.data;
//                 setImageUrl(data.url); // Short URL provided by ImgBB
//                 console.log(data.url);
//             } catch (error) {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Image upload failed",
//                 });
//                 console.error(error);
//             } finally {
//                 setLoader(false); // Hide loader after the image upload completes
//             }
//         }
//     };

//     return (
//         <>
//             {Loader && (
//                 <div className="loadershow">
//                     <img
//                         src={require("../assets/Image/c7e1b7b5753737039e1bdbda578132b8.gif")}
//                         alt="Loading..."
//                         height={300}
//                         width={300}
//                         className="img-fluid object-fit-cover"
//                     />
//                 </div>
//             )}
//             {!Loader && (
//                 <div>
//                     <h2 className="text-center fw-bold pt-5 pb-3 pt-lg-0 pb-lg-0">Add New Blog Data</h2>
//                     <div className="form-card py-0 px-0 py-lg-3 px-lg-5">
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group controlId="title">
//                                 <Form.Label className="form-label fw-bold">
//                                     <MdOutlineSubtitles className="fs-5" /> Blog Title
//                                 </Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                     placeholder="Enter Title"
//                                     className="form-input border border-1 border-secondary p-2"
//                                 />
//                                 {formErrors.title && (
//                                     <div className="text-danger">{formErrors.title}</div>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="date" className="mt-4">
//                                 <Form.Label className="form-label fw-bold">
//                                     <MdDateRange className="fs-5" /> Date
//                                 </Form.Label>
//                                 <Form.Control
//                                     type="date"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                     className="form-input border border-1 border-secondary p-2"
//                                 />
//                                 {formErrors.date && (
//                                     <div className="text-danger">{formErrors.date}</div>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="description" className="mt-4">
//                                 <Form.Label className="form-label fw-bold">
//                                     <TbFileDescription className="fs-5" /> Blog Detail
//                                 </Form.Label>
//                                 <Form.Control
//                                     as="textarea"
//                                     rows={8}
//                                     cols={60}
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     placeholder="Enter blog detail"
//                                     className="form-input border border-1 border-secondary"
//                                 />
//                                 {formErrors.description && (
//                                     <div className="text-danger">{formErrors.description}</div>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="blogurl" className="mt-3">
//                                 <Form.Label className="form-label fw-bold">
//                                     <MdDatasetLinked className="fs-5" /> Blog Url
//                                 </Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={blogUrl}
//                                     onChange={(e) => setBlogUrl(e.target.value)}
//                                     placeholder="Paste Your Blog URL Here"
//                                     className="form-input border border-1 border-secondary p-2"
//                                     pattern="^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9-]+(\/[^\s]*)?$"
//                                 />
//                                 {formErrors.blogUrl && (
//                                     <div className="text-danger">{formErrors.blogUrl}</div>
//                                 )}
//                             </Form.Group>

//                             <Form.Group controlId="picture" className="mt-4">
//                                 <Form.Label className="form-label fw-bold">
//                                     <ImFilePicture className="fs-5" /> Picture <span>(1000px x 900px)</span>
//                                 </Form.Label>
//                                 <Form.Control
//                                     type="file"
//                                     onChange={handleImageChange}
//                                     className="form-input border border-1 border-secondary p-2"
//                                 />
//                                 {selectedImageName && (
//                                     <p className="mt-2 text-secondary">Selected file: {selectedImageName}</p>
//                                 )}
//                                 {formErrors.imageUrl && (
//                                     <div className="text-danger">{formErrors.imageUrl}</div>
//                                 )}
//                             </Form.Group>

//                             <Button
//                                 variant="primary"
//                                 type="submit"
//                                 className="mt-5 w-100 p-3 gradient-btn border-none text-white fw-bold"
//                             >
//                                 SUBMIT
//                             </Button>
//                         </Form>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default AdminForm;
import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { MdDatasetLinked, MdDateRange, MdOutlineSubtitles } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AdminForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [blogUrl, setBlogUrl] = useState("");
    const [selectedImageName, setSelectedImageName] = useState(""); // New state for file name
    const [Loader, setLoader] = useState(false);
    
    const [formErrors, setFormErrors] = useState({
        title: "",
        description: "",
        date: "",
        blogUrl: "",
        imageUrl: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        const errors = validateForm();
        if (Object.values(errors).some((error) => error)) {
            setFormErrors(errors);
            return;
        }

        try {
            await axios.post("https://admindb-indol.vercel.app/api/data", {
                title,
                description,
                date,
                imageUrl,
                blogUrl,
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

    const validateForm = () => {
        const errors = {};

        // Title validation
        if (!title) {
            errors.title = "Title is required";
        }

        // Description validation
        if (!description) {
            errors.description = "Description is required";
        }

        // Date validation
        if (!date) {
            errors.date = "Date is required";
        }

        // Blog URL validation with regex pattern
        const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9-]+(\/[^\s]*)?$/i;
        if (!blogUrl) {
            errors.blogUrl = "Blog URL is required";
        } else if (!urlPattern.test(blogUrl)) {
            errors.blogUrl = "Please enter a valid Blog URL";
        }

        // Image validation
        if (!imageUrl) {
            errors.imageUrl = "Image is required";
        }

        return errors;
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
                // Clear error when image is successfully uploaded
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    imageUrl: "",
                }));
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

    // Clear form errors when the user starts typing in a field
    const handleInputChange = (e, field) => {
        const { value } = e.target;
        if (field === "title") setTitle(value);
        if (field === "description") setDescription(value);
        if (field === "date") setDate(value);
        if (field === "blogUrl") setBlogUrl(value);
        if (field === "imageUrl") setImageUrl(value);

        // Clear the corresponding error when the user starts typing
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [field]: "",
        }));
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
                                    onChange={(e) => handleInputChange(e, "title")}
                                    placeholder="Enter Title"
                                    className="form-input border border-1 border-secondary p-2"
                                />
                                {formErrors.title && (
                                    <div className="text-danger">{formErrors.title}</div>
                                )}
                            </Form.Group>

                            <Form.Group controlId="date" className="mt-4">
                                <Form.Label className="form-label fw-bold">
                                    <MdDateRange className="fs-5" /> Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => handleInputChange(e, "date")}
                                    className="form-input border border-1 border-secondary p-2"
                                />
                                {formErrors.date && (
                                    <div className="text-danger">{formErrors.date}</div>
                                )}
                            </Form.Group>

                            <Form.Group controlId="description" className="mt-4">
                                <Form.Label className="form-label fw-bold">
                                    <TbFileDescription className="fs-5" /> Blog Detail
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    value={description}
                                    onChange={(e) => handleInputChange(e, "description")}
                                    placeholder="Enter blog detail"
                                    className="form-input border border-1 border-secondary"
                                />
                                {formErrors.description && (
                                    <div className="text-danger">{formErrors.description}</div>
                                )}
                            </Form.Group>

                            <Form.Group controlId="blogurl" className="mt-3">
                                <Form.Label className="form-label fw-bold">
                                    <MdDatasetLinked className="fs-5" /> Blog Url
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={blogUrl}
                                    onChange={(e) => handleInputChange(e, "blogUrl")}
                                    placeholder="Paste Your Blog URL Here"
                                    className="form-input border border-1 border-secondary p-2"
                                    pattern="^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9-]+(\/[^\s]*)?$"
                                />
                                {formErrors.blogUrl && (
                                    <div className="text-danger">{formErrors.blogUrl}</div>
                                )}
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
                                {formErrors.imageUrl && (
                                    <div className="text-danger">{formErrors.imageUrl}</div>
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

