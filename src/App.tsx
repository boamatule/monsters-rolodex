import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

type Monster = {
	id: string;
	name: string;
	email: string;
};
const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState<Monsters[]>([]);
	const [filterMonsters, setFilterMonsters] = useState(monsters);

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/users')
		//   .then((response) => response.json())
		//   .then((users) => setMonsters(users));
		const fetchUsers = async () => {
			const users = await getData<Monster>(
				"https://jsonplaceholder.typicode.com/users",
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilterMonsters = monsters.filter((monster) =>
			monster.name.toLocaleLowerCase().includes(searchField),
		);
		setFilterMonsters(newFilterMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox
				placeholder="Search monsters"
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filterMonsters} />
		</div>
	);
};

export default App;
