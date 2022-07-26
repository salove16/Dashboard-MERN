import { useEffect, useState } from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
export const Table = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:4000/employee");
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {}
  };

  const handleEdit = (id) => {
    navigate(`/${id}/edit`);
  };

  return (
    <div style={{width:'100%', marginLeft:'1%'}}>
      <div>
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="">
    home
  </Link>
  <Link
    underline="hover"
    color="text.primary"
    href="/table"
    aria-current="page"
  >
   Table
  </Link>
  </Breadcrumbs>
  <h4>TABLE</h4>
</div>
      <div style={{ width: "100%" ,marginTop:'2%'}}>
      <table style={{ width: "90%",margin:'auto' }}>
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, k) => (
              <tr key={k}>
                <div style={{ alignItem: "center", display: "flex" }}>
                  <div className="table_image">
                    <img src={e.profile_pic} alt="profile pic" />
                  </div>
                  <div>
                    <h5>{e.name}</h5>
                    <p>{e.email}</p>
                  </div>
                </div>
                <td>
                  <h5>{e.position}</h5>
                  <p>{e.role}</p>
                </td>
                <td>
                  <button
                    style={{ background: e.status === true ? "green" : "gray" }}
                  >
                    {e.status === true ? "Online" : "Offline"}
                  </button>
                </td>
                <td>{e.employed}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(e._id);
                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

{/* <div>
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="">
    home
  </Link>
  <Link
    underline="hover"
    color="text.primary"
    href="/dashboard"
    aria-current="page"
  >
    Dashboard
  </Link>
  </Breadcrumbs>
</div> */}