import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function ManageData() {
    const [data, setData] = useState([]);

    // Fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get("https://admindb-indol.vercel.app");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handle delete action
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://admindb-indol.vercel.app/api/data/${id}`);
            Swal.fire({
                icon: "success",
                title: "Data deleted successfully!",
                // position: "top-end",
                // toast: true,
                showConfirmButton: false,
                timer: 1500,
            });
            fetchData();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed to delete data",
            });
        }
    };

    return (
        <div>
            <h2 className="text-center fw-bold pt-5 pb-3 pt-lg-0 pb-lg-0">Manage Data</h2>
            <div className="table-responsive py-0 px-0 py-lg-3">
                <table className="table table-bordered border-white table-striped">
                    <thead className="thead-dark  tablecolor">
                        <tr className="text-center">
                            <th className="tablecolor  text-white" style={{ width: "5%" }}>No.</th>
                            <th className="tablecolor  text-white" style={{ width: "15%" }}>Picture</th>
                            <th className="tablecolor  text-white" style={{ width: "20%" }}>Tittle</th>
                            <th className="tablecolor  text-white" style={{ width: "30%" }}>Description</th>
                            <th className="tablecolor  text-white" style={{ width: "15%" }}>Date</th>
                            <th className="tablecolor  text-white" style={{ width: "15%" }}>Action </th>
                        </tr>
                    </thead>
                    <tbody className="border-transparent border-3 align-middle">
                        {data.map((item, index) => (
                            <tr key={index} className="text-center w-100">
                                <td style={{ width: "5%" }}>{index + 1}</td>
                                <td style={{ width: "15%" }}>

                                    <img
                                        src={item.imageUrl}
                                        alt="not found"
                                        style={{ width: "50px", height: "50px" }}
                                    />

                                </td>
                                <td style={{ width: "20%" }}>{item.title}</td>
                                <td style={{ width: "30%" }}>{item.description}</td>
                                <td style={{ width: "15%" }}>{item.date}</td>
                                <td style={{ width: "15%" }}>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageData;
