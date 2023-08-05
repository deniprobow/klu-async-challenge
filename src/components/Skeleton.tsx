function MessageSkeleton(){
    return(
        <div className="flex animate-pulse">
            <div className="ml-4 mt-2 w-full">

                <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                </ul>
                <p className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{width: '40%'}}></p>
            </div>
            </div>
    )
}

function UrlSkeleton(){
    return(
        <div className="flex animate-pulse">
            <div className="ml-4 mt-2 w-full">
                <div className="w-full h-32 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            </div>
            </div>
    )
}

export {MessageSkeleton, UrlSkeleton}