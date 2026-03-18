import Card from "./Card"
import Link from "next/link"

export default function VenueCatalog({venueJson} : {venueJson:Object}) {
    return (
        <>
            Explore {venueJson.count} models in our catalog
            <div style={{
                margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap",
                justifyContent: "space-around", alignContent: "space-around"
            }}>
                {
                    venueJson.data.map((venueItem:Object)=>(
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                        <Card 
                            venueName= {venueItem.name}
                            imgSrc={venueItem.picture}
                            value={venueItem.dailyrate || 0}
                        />
                        </Link>
                    ))
                }
                
            </div>
        </>
    )
}