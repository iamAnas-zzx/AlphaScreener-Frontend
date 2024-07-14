import Watchlistbutton from "./Buttons/WatchListButton";
import Container from "./container/Container";
function Watchlist() {
    const lists = [
        {
            name: 'List1',
            active: true,
            results: [
            ]
        },
        {
            name: 'List2'
        },
        {
            name: 'List3'
        },
        {
            name: 'List4'
        },
        {
            name: 'List5'
        }
    ]


    return <div className="flex my-2 py-2 px-6" >
        {
            <Container 
                className="!px-2 pb-2 border-b-[1px]  border-customDarkBlue-900"
            >   
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {lists.map((ls) => (
                        <Watchlistbutton
                            key={ls.name}
                            label={ls.name}
                            className={`${ls.active ?  "bg-customDarkBlue-1100 !text-customLightBlue-300" : "bg-customDarkBlue-900  hover:bg-customDarkBlue-1100 hover:text-customLightBlue-300"} w-full`}
                            
                        >{ls.name}</Watchlistbutton> 
                ))}
                </div>
            </Container>
        }
    </div>
}

export { Watchlist };