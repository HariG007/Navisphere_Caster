export const userColumns = [
  { field: "id", headerName: "S.No", width: 300 },
  {
    field: "user",
    headerName: "User Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field:"time",
    headerName:"Timestamp",
    width:300,
  },
  {
    field: "status",
    headerName: "Status",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Jegan A",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"07-01-2024 9:34:56",
  },
  {
    id: 2,
    username: "Jai Krishna R",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Inactive",
    time:"21-11-2023 15:22:45",
  },
  {
    id: 3,
    username: "Ajees S",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"21-11-2023 07:12:30",
  },
  {
    id: 4,
    username: "Harry potter",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"14-11-2023 21:56:02",
  },
  {
    id: 5,
    username: "Karunya K",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"14-11-2023 12:45:18",
  },
  {
    id: 6,
    username: "Manikandan R",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Inactive",
    time:"30-06-2023 03:28:59",
  },
  {
    id: 7,
    username: "Abikumar S",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"30-06-2023 18:09:37",
  },
  {
    id: 8,
    username: "Aravind P",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"04-05-2023 10:15:44",
  },
  {
    id: 9,
    username: "Rolex",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Inactive",
    time:"07-02-2023 04:50:21",
  },
  {
    id: 10,
    username: "Allen J",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Active",
    time:"12-01-2023 23:07:12"
  },
];
