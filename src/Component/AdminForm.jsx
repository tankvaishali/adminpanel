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
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post("http://localhost:5000/api/data", {
            await axios.post("https://admindb-indol.vercel.app/api/data", {
                title,
                description,
                date,
                imageUrl,
            });
            Swal.fire({
                icon: "success",
                title: "Data added successfully!",
                // position: "top-end",
                // toast: true,
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>

            <h2 className="text-center fw-bold pt-5 pb-3 pt-lg-0 pb-lg-0">Add New Data</h2>
            <div className="form-card py-0 px-0 py-lg-3 px-lg-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="tittle">
                        <Form.Label className="form-label fw-bold">
                            <MdOutlineSubtitles className="fs-5" /> Title
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Title"
                            className="form-input border border-1 border-secondary"
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
                            className="form-input border border-1 border-secondary"
                        />
                    </Form.Group>

                    <Form.Group controlId="description" className="mt-4">
                        <Form.Label className="form-label fw-bold">
                            <TbFileDescription className="fs-5" /> Description
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter Description"
                            className="form-input border border-1 border-secondary"
                        />
                    </Form.Group>

                    <Form.Group controlId="picture" className="mt-4">
                        <Form.Label className="form-label fw-bold">
                            <ImFilePicture className="fs-5" /> Picture
                        </Form.Label>
                        <Form.Control
                            type="file"
                            onChange={handleImageChange}
                            className="form-input border border-1 border-secondary"
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-4 w-100 gradient-btn border-none text-white fw-bold"
                    >
                        SUBMIT
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default AdminForm;