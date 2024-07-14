import Header from "../components/Header/Header";
import {Watchlist as Lists }  from "../components/Lists";
import Tabledata from "../components/Table";
function Watchlist() {
    return <>
        <div className="min-h-screen min-w-[270px] flex flex-col bg-customLightBlue-700" >
            <div className="flex justify-center w-full max-h-[80px]" >
                <Header />
            </div>
            <div >
                <Lists />
            </div>
            <div className="" >
                <Tabledata />
            </div>
        </div>
    </>
}

export default Watchlist;