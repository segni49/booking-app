import getAllRooms from './actions/getAllRooms';
import RoomCard from './components/RoomCard';




export default async function Home() {
         const rooms = (await getAllRooms()) || [];
         const transformedRooms = rooms.map((room) => ({
          ...room,
          user_id: room.user_id ,
          name: room.name ,
          description: room.description ,
          sqft: room.sqft ,
          capacity: room.capacity,
          location: room.location ,
          address: room.address ,
          amenities: room.amenities ,
          availability: room.availability,
          price_per_hour: room.price_per_hour,
          image: room.image , // Provide a default image path
          // Add other default values as needed
        }));
      
        return (
          <div>
            {transformedRooms.map((room) => (
              <RoomCard key={room.$id} room={room} />
            ))}
          </div>
        );
      }
