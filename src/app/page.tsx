import getAllRooms from './actions/getAllRooms';
import RoomCard from './components/RoomCard';
export default async function Home() {

 const rooms: Document = await getAllRooms();
  return (

   
       <div>
           {
            rooms.map((room) => <RoomCard key= {room.$id} room ={room}/>)
           }
        
       </div>
  )
