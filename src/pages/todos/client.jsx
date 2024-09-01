import axios from "axios";
import { useEffect, useState } from "react";

const ClientSide = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = () => {
		setLoading(true);
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	if (loading) return <div>Loading. . .</div>;

	return (
		<div>
			<h1 className="mb-4 text-2xl">Client Side data fetching</h1>
			<ul>
				{data.map((todo) => (
					<li key={todo.id}>- {todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ClientSide;
