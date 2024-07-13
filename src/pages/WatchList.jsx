import { NavbarSimple } from "../components/Header/NavBar";
import Header from "../components/Header/Header";
import Container from '../components/container/Container'
import {Watchlist as Lists }  from "../components/Lists";
function Watchlist() {
    return <>
        <div className="min-h-screen min-w-[270px] flex flex-col bg-customLightBlue-700" >
            <div className="flex justify-center w-full max-h-[80px]" >
                <Header />
            </div>
            <div >
                <Lists />
            </div>
            {/* <div className="container " >

            </div> */}
        </div>
    </>
}

export default Watchlist;