import Watchlistbutton from "./Buttons/WatchListButton";

function Watchlist() {
    const lists = [
        {
            name: 'List1',
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


    return <div className="flex  my-2 py-2 px-6 border-b border:black" >
        {
            <div>
            {lists.map((ls) => (
                <Watchlistbutton 
                    key={ls.name}
                    label={ls.name}
                    className="py-2 min-w-[200px] mx-4 my-2"
                >{ls.name}</Watchlistbutton>
            ))}
            </div>
        }
    </div>
}

export { Watchlist };