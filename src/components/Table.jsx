import Container from "./container/Container";
import { PencilIcon } from "@heroicons/react/24/solid";
import Button from "./Buttons/Button";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

// const [loading, setLoading] = useState(true);
const TABLE_ROWS = [
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        name: "Spotify",
        amount: "$2,500",
        date: "Wed 3:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
        name: "Amazon",
        amount: "$5,000",
        date: "Wed 1:00pm",
        status: "paid",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        amount: "$3,400",
        date: "Mon 7:40pm",
        status: "pending",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        amount: "$1,000",
        date: "Wed 5:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
];


function Tabledata() {


    function setHead(data) {
        const headerData = data.map((item) => item.results);
        console.log(headerData);
        // setThead
        const f = headerData[0];
        // console.log(f);
        const d = f.map(a => {
            return Object.keys(a);
        })
        setThead(d);
        // console.log(d);
        // })
    }



    const fetchData = async () => {
        try {
            const res = await fetch('http://192.168.1.16:8000/watchList/');
            const response = await res.json();
            console.log(response);
            setData(response);
            setHead(response);
            // Assuming the response is the data you need to set
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        // Fetch data from API
        // fetchData();
        // const res = fetch('http://localhost:8000/watchList/');
        // const response = res.json();
        // console.log(response);
        // setData(res.data); 
        // setData(response.data);
        // setInterval( fetchData ,1000);
        fetchData()
            ;
    }, [])

    const [data, setData] = useState([]);
    const [thead, setThead] = useState([]);

    return (
        <Container>
            <Card className="h-full w-full bg-customDarkBlue-900">
                <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent ">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="white" className="opacity-90">
                                Recent Transactions
                            </Typography>
                            <Typography color="white" className="opacity-90 mt-1 font-normal ">
                                These are details about the last transactions
                            </Typography>
                        </div>
                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full md:w-72">
                                <Input
                                    color="blue"
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>
                            {/* <Button className="flex items-center gap-3" size="sm">
                            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                        </Button> */}
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {thead.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="black"
                                            className="font-bold leading-none "
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                                (
                                    {
                                        img,
                                        name,
                                        amount,
                                        date,
                                        status,
                                        account,
                                        accountNumber,
                                        expiry,
                                    },
                                    index,
                                ) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    {/* <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                /> */}
                                                    <Typography
                                                        variant="small"
                                                        color="white"
                                                        className="font-normal opacity-90"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-90"
                                                >
                                                    {amount}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-90"
                                                >
                                                    {date}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                {/* <div className="w-max">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={status}
                                                    color={
                                                        status === "paid"
                                                            ? "green"
                                                            : status === "pending"
                                                                ? "amber"
                                                                : "red"
                                                    }
                                                />
                                            </div> */}
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-90"
                                                >
                                                    {date}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                {/* <div className="flex items-center gap-3">
                                                <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <Avatar
                                                        src={
                                                            account === "visa"
                                                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                                        }
                                                        size="sm"
                                                        alt={account}
                                                        variant="square"
                                                        className="h-full w-full object-contain p-1"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {account.split("-").join(" ")} {accountNumber}
                                                    </Typography> */}
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-90"
                                                >
                                                    {expiry}
                                                </Typography>
                                                {/* </div> 
                                            </div> */}
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal  opacity-90"
                                                >
                                                    {expiry}
                                                </Typography>
                                                {/* <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip> */}
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Button
                        size="sm"
                        label="Previous"
                        // color='cutomDarkBlue-500'
                        className='!text-blue-gray-800 bg-customLightBlue-500 hover:bg-customLightBlue-700 hover:text-black'
                    >
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton
                            variant="outlined"
                            className="border-white text-white"
                            size="sm">
                            1
                        </IconButton>
                        <IconButton variant="text" size="sm" className="text-white hover:bg-customLightBlue-700 hover:text-blue-gray-800" >
                            2
                        </IconButton>
                        <IconButton variant="text" size="sm" className="text-white hover:bg-customLightBlue-700 hover:text-blue-gray-800">
                            3
                        </IconButton>
                        <IconButton variant="text" size="sm" className="text-white hover:bg-customLightBlue-700 hover:text-blue-gray-800">
                            ...
                        </IconButton>
                        <IconButton variant="text" size="sm" className="text-white hover:bg-customLightBlue-700 hover:text-blue-gray-800">
                            8
                        </IconButton>
                        <IconButton variant="text" size="sm" className="text-white hover:bg-customLightBlue-700 hover:text-blue-gray-800">
                            9
                        </IconButton>
                        <IconButton variant="text" size="sm" >
                            10
                        </IconButton>
                    </div>
                    <Button
                        size="sm"
                        label="Next"
                        className="!text-blue-gray-800 bg-customLightBlue-500 hover:bg-customLightBlue-700 hover:text-black"
                    >
                    </Button>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default Tabledata;