export default function ProfilText( {name}: {name:string | null | undefined}) {
    return (
        <div 
        className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white"
        >

            <h3 className="text-lg font-bold 	font-bold">
                {name?.split(" ") .map(word => word[0]).join("")}
            </h3>
        </div>
    )
}