import { UserCard } from "./UserCard"
import userData from "./user.json"
import "./user.css"

function App() {
	return (
		<UserCard
			name={userData.name}
      phoneNumber={userData.phoneNumber}
			age={userData.age}
			address={userData.address}
		/>
	)
}

export default App
